import { action, makeObservable, observable, runInAction, toJS } from 'mobx';

import { RootStore } from './rootStore';
import { axiosChannel } from '../api/agent';
import { IChannel } from '../models/channels';

export default class ChannelStore {

    @observable channels: IChannel[] = [];
    @observable isModalvisible: boolean = false;
    @observable activechannel: IChannel | null = null;
    rootStore: RootStore;

    constructor( rootStore: RootStore ) {
        makeObservable(this);
        this.rootStore = rootStore;
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

    @action setActiveChannel = ( channel: IChannel ) => {
        this.activechannel = channel;
    }

    @action getCurrentChannel = () => {
        //toJS es para devolver el objeto tal cual y no con las propiedades de mobx
        //si esto es nulo:
        return toJS( this.activechannel ?? this.channels[0] );
    }

}