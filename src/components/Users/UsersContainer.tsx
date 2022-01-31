import React from "react";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users_reduser";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";


let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        followUsers: (usersID: number) => {
            dispatch(followAC(usersID))
        },
        unfollowUsers: (usersID: number) => {
            dispatch(unfollowAC(usersID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer