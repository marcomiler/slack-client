import { action, makeObservable, observable, configure, runInAction } from 'mobx';
import { createContext } from 'react';
import { axiosChannel } from '../api/agent';
import { IChannel } from '../models/channels';

configure({enforceActions: 'always'})//habilitamos strict mode
class ChannelStore {

    @observable channels: IChannel[] = [];
    @observable isModalvisible: boolean = false;

    constructor() {
        makeObservable(this);
    }

    @action loadChannels = async () => {
        try{
            var response = await axiosChannel.list();
            //siguiendo lineamientos con strict mode => luego de un promise debe ser envuelto de esta manera
            runInAction(() => 
                response.forEach((channel) => this.channels.push(channel))
            );
            
        }catch(err){
            console.log(err);
        }
    }

    @action showModal = ( show: boolean ) => {
        this.isModalvisible = show;
    }

    @action createChannel = async (channel: IChannel) => {
        try {
            await axiosChannel.create( channel );
            runInAction(() => this.channels.push( channel ) );
        }catch(err) {
            console.log(err);
        }

    }

}

export default createContext( new ChannelStore() );