import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";


type DialogsType = {
    state: DialogPageType
    dispatch: (action: any) => void


}

const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.state.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map((m: any) => <Message message={m.message}/>)

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
        //props.dispatch(updateNewMessageBodyCreator(''));
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //let body = e.target.value
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body));
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

            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <textarea
                value={props.state.newMessageBody}
                onChange={onNewMessageChange}
                onKeyPress ={onKeyPressHandler}
                placeholder="Enter Your message"
            />
            <div>
                <button onClick={onSendMessageClick}> send</button>
            </div>

        </div>
    )
}

export default Dialogs