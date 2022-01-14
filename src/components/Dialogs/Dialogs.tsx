import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addDialogs, addPost} from "../../redux/state";


const Dialogs = (props: any) => {

    let dialogsElements = props.state.dialogs.map ((d:any) => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map ((m:any) => <Message message={m.message} />)

    let newMessageElement = React.createRef<any>()

    let addMessage = () => {
        let text = newMessageElement.current.value;
        addDialogs(text);
        newMessageElement.current.value = "";
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <textarea ref={newMessageElement}></textarea>
           <div>
            <button onClick={addMessage} > add</button>
           </div>

        </div>
    )
}

export default Dialogs