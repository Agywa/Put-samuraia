import React from "react";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users_reduser";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {AppStateType} from "../../redux/redux-store";



type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount:number
    currentPage:number
}
type MapDispatchToPropsType = {
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (usersID: number) => {
            dispatch(followAC(usersID))
        },
        unfollow: (usersID: number) => {
            dispatch(unfollowAC(usersID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer