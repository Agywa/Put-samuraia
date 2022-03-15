import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
    }
}
//  как то есть такая возможность через compose но в RR 6  не работает )))
// compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect,
// )(Dialogs);

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer


