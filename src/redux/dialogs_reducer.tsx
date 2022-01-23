import React from "react";
import {ActionTypes, DialogPageType, MessageType} from "./store";


const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState =   {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrei"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Vuktor"},
        {id: 6, name: "Valera"},
    ],

        messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ],
        newMessageBody: ""
}


const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let addDialogs: MessageType = {
                id: 7,
                message: state.newMessageBody,
            };

            state.messages.push(addDialogs);
            state.newMessageBody = "";
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}
export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
