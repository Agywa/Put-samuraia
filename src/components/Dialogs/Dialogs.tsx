import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props: any) => {
    return <div className={s.dialogs + " " + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>

}

const Message = (props: any) => {
    return <div className={s.dialogs}>{props.message}</div>
}

const Dialogs = (props: any) => {

    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrei"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Vuktor"},
        {id: 6, name: "Valera"},
    ]
    let dialogsElements = [

        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,

    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>

            </div>


        </div>
    )
}

export default Dialogs