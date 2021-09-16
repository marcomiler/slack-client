import { action, observable, runInAction, makeObservable } from 'mobx';

import { RootStore } from './rootStore';
import { axiosMessage } from '../api/agent';
import { IMessage, IMessageFormValues } from '../models/messages';

export default class MessageStore {

    @observable messages : IMessage[] = [];
    rootStore: RootStore;

    constructor( rootStore: RootStore )
    {
        makeObservable(this);
        this.rootStore = rootStore;
    }

    @action sendMessage = async ( message: IMessageFormValues ) => {

        try {
            
            const result = await axiosMessage.send( message );
            runInAction(() => {
                this.messages.push(result);
            });

        } catch (error) {
            throw error;
        }

    }

}