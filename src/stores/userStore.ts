import { history } from '../index'
import { action, computed, makeObservable, observable, runInAction } from "mobx";

import { RootStore } from './rootStore';
import { axiosUser } from "../api/agent";
import { IUSer, IUserFormValues } from '../models/users';

export default class UserStore {

    @observable user: IUSer | null = null;
    rootStore: RootStore;

    constructor( rootStore: RootStore ) {
        makeObservable(this);
        this.rootStore = rootStore;
    }

    @computed get IsLoggedIn() {
        return !!this.user;
    }

    @action login = async ( values: IUserFormValues ) => {

        try {
            var user = await axiosUser.login( values );
            runInAction(() => {
                // console.log(user);
                this.user = user;
                history.push("/");
                this.rootStore.commonStore.setToken( user.token );
            });
        } catch (error) {
            throw error;
        }

    } 

    @action logout = () => {
        this.rootStore.commonStore.setToken(null);
        this.user = null;
        history.push("/login");
    }

    @action getUser = async () => {

        try {

            const user = await axiosUser.currentUser();
            runInAction(() => {
                this.user = user;
            });

        } catch (error) {
            throw error;
        }

    }

}