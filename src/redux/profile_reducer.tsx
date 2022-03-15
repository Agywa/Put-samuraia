import React from "react";
import {ProfileAllType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {getProfile, getStatus, updateStatus} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Bla Bla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11},
    ],
    newPostText: "",
    profile: null,
    status: "",
}

type AddPostActionType = {
    type: "ADD-POST"
    post: string
}
export type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type setUserProfile = {
    type: "SET_USER_PROFILE"
    profile: any
}
export type setStatus = {
    type: "SET_STATUS"
    status: string
}

type ActionTypes =
    AddPostActionType
    | UpdateNewPostTextType
    | setUserProfile
    | setStatus


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
    status: string
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: action.post,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}
export default profileReducer;

export const addPostActionCreator = (post:string) => ({type: ADD_POST , post})
const setUserProfile = (profile: ProfileAllType) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string) => ({type: SET_STATUS, status})


export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    updateStatus(status)
        .then(response => {
            if(response.data.resultCode ===0) {
                dispatch(setStatus(status))
            }
        })
}