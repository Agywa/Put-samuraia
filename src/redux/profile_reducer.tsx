import React from "react";
import {ActionTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Bla Bla", likesCount: 11},
            {id: 4, message: "Dada", likesCount: 11},
        ],
        newPostText: ""
    }

 const profileReducer = (state: ProfilePageType = initialState,action:ActionTypes) => {
     switch (action.type) {
         case ADD_POST:
             let newPost: PostType = {
                 id: 5,
                 message: state.newPostText,
                 likesCount: 0
             };
             state.posts.push(newPost);
             state.newPostText = ""
             return state;
         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newText;
             return state;
         default: return state;
     }
}
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
