import { configure } from "mobx";
import { createContext } from "react";

import UserStore from './userStore';
import ChannelStore from './channelStore';
import CommonStore from './commonStore';

configure({enforceActions: 'always'})//habilitamos strict mode
export class RootStore {

    userStore: UserStore;
    channelStore: ChannelStore;
    commonStore: CommonStore;

    constructor() {
        
        this.userStore = new UserStore(this);
        this.channelStore = new ChannelStore(this);
        this.commonStore = new CommonStore(this);
        
    }

}

export const RootStoreContext = createContext( new RootStore() );