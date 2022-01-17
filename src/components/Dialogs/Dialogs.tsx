import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


type DialogsType = {

}

const Dialogs = (props: any) => {

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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <textarea
                value={props.newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter Your message"
            />
            <div>
                <button onClick={onSendMessageClick}> send </button>
            </div>

        </div>
    )
}

export default Dialogs