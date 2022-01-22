import React from "react";
import {ActionTypes, DialogPageType, MessageType} from "./state";


const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

const dialogsReducer = (state: DialogPageType, action: ActionTypes) => {


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
