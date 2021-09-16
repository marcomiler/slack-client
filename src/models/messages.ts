import { IUSer } from "./users";

export interface IMessage {
    content:    string;
    createdAt:  Date;
    user:       IUSer;
}

export interface IMessageFormValues {
    content:    string;
    channelId:  string
}