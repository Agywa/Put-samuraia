import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType, DialogType, MessageType} from "../../redux/store";
import {useFormik} from "formik";


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

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === "Enter") {
    //         onSendMessageClick()
    //     }
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessagesForm
                sendMessage = {props.sendMessage}/>
        </div>

    )
}

type AddMessagesForm = {
    sendMessage: (newMessageBody:string) => void
}

const AddMessagesForm = (props:AddMessagesForm) => {
    const formik = useFormik({
        initialValues: {
            newMessageBody: '',
        },
        onSubmit: values => {
           props.sendMessage(values.newMessageBody)

        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea
                    name="newMessageBody"
                    value={formik.values.newMessageBody}
                    onChange={formik.handleChange}
                    placeholder="Enter Your message"
                />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    );
};


export default Dialogs