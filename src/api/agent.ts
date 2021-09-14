import { history } from '../index';
import { toast } from 'react-toastify';
import axios, { AxiosResponse } from 'axios';

import { IChannel } from '../models/channels';
import { IUSer, IUserFormValues } from '../models/users';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use( undefined, (error) => {

    if(error.message === 'Network Error' && !error.response)
    {
        toast.error('Network Error -Make sure API is running');
        return;
    }

    const { status } = error.response;

    if(status === 404) history.push( '/notfound' );
    if(status === 500) toast.error('Server error - Check the terminal');

    //si hay algun error:
    throw error.response;
});

axios.interceptors.request.use((config) => {

    const token = localStorage.getItem("jwt");
    if(token) config.headers.authorization = `Bearer ${token}`;

    return config;

}, (err) => Promise.reject(err) );

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

export const axiosUser = {
    login: ( user: IUserFormValues ) : Promise<IUSer> => request.post( `/user/login`, user ),
    register: ( user: IUserFormValues ) : Promise<IUSer> => request.post( `/user/register`, user ),
    currentUser: () : Promise<IUSer> => request.get( `/user` )
};

export const axiosChannel = {
    list: () : Promise<IChannel[]> => request.get('/channels'),
    create: (channel: IChannel) => request.post('/channels', channel)
}