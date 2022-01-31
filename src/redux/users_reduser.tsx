import React from "react";
import {ActionTypes} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


export type LocationUsersType = {
    city: string,
    country: string
}
export type PhotosType = {
    small: string|undefined
    large: string|undefined
}
export type UserType= {
    id: number,
    photos: PhotosType
    followed: boolean,
    name: string,
    status: string,
 //   location:LocationUsersType
}

export type initialStateType = {
    users: Array<UserType>
}

let initialState:initialStateType = {
    users: [],
}


const usersReducer = (state: initialStateType = initialState, action: ActionTypes):initialStateType => {
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}


export default usersReducer;

export const followAC = (usersID: number) => ({type: FOLLOW, usersID})
export const unfollowAC = (usersID: number) => ({type: UNFOLLOW, usersID})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
