import React from "react";
import {MessageType} from "./state";


const UPDATE_NEW_MESSAGE_BODY = {type: "UPDATE_NEW_MESSAGE_BODY"};
const SEND_MESSAGE = "SEND_MESSAGE"

const dialogsReducer = (state: any, action: any) => {


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
