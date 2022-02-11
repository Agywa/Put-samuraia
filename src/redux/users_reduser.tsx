import React from "react";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";


export type LocationUsersType = {
    city: string,
    country: string
}
export type PhotosType = {
    small: string | undefined
    large: string | undefined
}
export type UserType = {
    id: number,
    photos: PhotosType
    followed: boolean,
    name: string,
    status: string,
    //   location:LocationUsersType
}

export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number

}

let initialState: initialStateType = {
    users: [],
    pageSize: 90,
    totalUsersCount: 0,
    currentPage: 1,

}


type FollowUsers = {
    type: "FOLLOW"
    usersID: number
}
type UnfollowUsers = {
    type: "UNFOLLOW"
    usersID: number
}
type SetUsersType = {
    type: "SET_USERS"
    users: any
}
type SetCurrentPage = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
type setTotalUsersCount = {
    type: "SET_TOTAL_USERS_COUNT"
    totalCount:number
}

export type ActionTypes =
    FollowUsers
    | UnfollowUsers
    | SetUsersType
    | SetCurrentPage
    | setTotalUsersCount


const usersReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    if (u.id === action.usersID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    if (u.id === action.usersID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users} // {...state, users: [...state.users, action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount:action.totalCount}
        }
        default:
            return state;
    }
}


export default usersReducer;

export const followAC = (usersID: number) => ({type: FOLLOW, usersID})
export const unfollowAC = (usersID: number) => ({type: UNFOLLOW, usersID})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
