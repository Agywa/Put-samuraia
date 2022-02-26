import React from "react";
import {ProfileAllType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {getProfile} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Bla Bla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11},
    ],
    newPostText: "",
    profile: null,
}

type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}
export type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type setUserProfile = {
    type: "SET_USER_PROFILE"
    profile: any
}

type ActionTypes =
    AddPostActionType
    | UpdateNewPostTextType
    | setUserProfile


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
const setUserProfile = (profile: ProfileAllType) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}