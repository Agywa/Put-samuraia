import React from 'react';
import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Bla Bla", likesCount: 11},
            {id: 4, message: "Dada", likesCount: 11},
        ],

    },


    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},

        ],
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrei"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Vuktor"},
            {id: 6, name: "Valera"},
        ],
    },
}

export let addPost = (postMessage: any) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);

    rerenderEntireTree({state});
}

export let addDialogs = (name:any) => {
    let addDialogs = {
        id: 7,
        name: name
    };
    state.dialogsPage.dialogs.push(addDialogs)
    rerenderEntireTree({state})
}

export default state;