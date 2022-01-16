import React from 'react';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "Bla Bla", likesCount: 11},
                {id: 4, message: "Dada", likesCount: 11},
            ],
            newPostText: "it_kamasutra.com"

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
    },

    getState() {
        return this._state
    },

    _rerenderEntireTree() {
        console.log("state changed");
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ""

        this._rerenderEntireTree();
    },

    updateNewPostText(newText: any) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree();
    },

    addDialogs(name: any) {
        let addDialogs = {
            id: 7,
            name: name
        };
        this._state.dialogsPage.dialogs.push(addDialogs)
        this._rerenderEntireTree()
    },
    subscribe(observer: any) {
        this._rerenderEntireTree = observer;
    }
}

export default store;


