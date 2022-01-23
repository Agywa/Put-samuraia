import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../redux/store";



type DialogsType = {
    messagePage: Array<MessageType>
    dialogsPage: Array<DialogType>
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    newMessageBody: string
}

const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogsPage.map((d: any) => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messagePage.map((m: any) => <Message message={m.message}/>)

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)

    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            onSendMessageClick()
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
                <textarea
                    value={props.newMessageBody}
                    onChange={onNewMessageChange}
                    onKeyPress={onKeyPressHandler}
                    placeholder="Enter Your message"
                />
                <div>
                    <button onClick={onSendMessageClick}> send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs