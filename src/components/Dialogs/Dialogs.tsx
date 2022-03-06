import React, {ChangeEvent, KeyboardEvent, useEffect} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType, DialogType, MessageType} from "../../redux/store";
import {useNavigate} from "react-router-dom";


type DialogsType = {
    // messagePage: Array<MessageType>
    dialogPage: DialogPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    isAuth: boolean
    // newMessageBody: string
}

const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogPage.dialogs.map((d: DialogType) => <DialogItem name={d.name} key={d.id}
                                                                                      id={d.id}/>)

    let messagesElements = props.dialogPage.messages.map((m: MessageType) => <Message message={m.message} key={m.id}/>)

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
                    value={props.dialogPage.newMessageBody}
                    onChange={onNewMessageChange}
                    onKeyPress={onKeyPressHandler}
                    placeholder="Enter Your message"
                />
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs