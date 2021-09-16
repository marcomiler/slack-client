import { action, makeObservable, observable, reaction } from 'mobx';

import { RootStore } from './rootStore';

export default class CommonStore {

    rootStore: RootStore;
    @observable token: string | null = localStorage.getItem('jwt');
    @observable appLoaded = false;

    constructor( rootStore: RootStore ){

        makeObservable(this);
        this.rootStore = rootStore;

        reaction(
            () => this.token,
            ( token ) => {
                if( token ){
                    localStorage.setItem('jwt', token!);
                } else {
                    localStorage.removeItem('jwt');
                }
            }
        );

    }

    @action setToken = ( token: string | null ) => {
        localStorage.setItem("jwt", token!);
        this.token = token;
    }

    @action setAppLoaded = () => {
        this.appLoaded = true;
    }

}