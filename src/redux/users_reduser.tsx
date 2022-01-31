import React from "react";
import {ActionTypes, UsersPageType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        //     {
        //         id: 1,
        //         followed: false,
        //         fullName: "Dmitry",
        //         status: "I am a boss",
        //         location: {city: "Minsk", country: "Belarus"}
        //     },
        //     {
        //         id: 2,
        //         followed: true,
        //         fullName: "Sasha",
        //         status: "I am a boss too",
        //         location: {city: "Moscow", country: "Russia"}
        //     },
        //     {
        //         id: 3,
        //         followed: false,
        //         fullName: "Andrew",
        //         status: "I am a boss too",
        //         location: {city: "Kiev", country: "Ukraine"}
        //     },
    ],
}

const usersReducer = (state: any = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.usersID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
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
export const setUsersAC = (users: any) => ({type: SET_USERS, users})
