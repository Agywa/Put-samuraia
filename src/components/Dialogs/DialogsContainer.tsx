import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state:AppStateType ) => {
  return{
      dialogPage:state.dialogsPage,
      isAuth: state.auth.isAuth
  }

}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);





// type DialogsContainerType = {
//     state: DialogPageType
//     dispatch: (action: { type: string; }) => void
// }

// const DialogsContainer = (props: DialogsContainerType) => {
//
//     let onSendMessageClick = () => {
//         props.dispatch(sendMessageCreator())
//     }
//     let onNewMessageChange = (body: string) => {
//         props.dispatch(updateNewMessageBodyCreator(body));
//     }
//     return (
//         <Dialogs
//             dialogsPage={props.state.dialogs}
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             newMessageBody={props.state.newMessageBody}
//             messagePage={props.state.messages}
//         />
//     )
// }
export default DialogsContainer

