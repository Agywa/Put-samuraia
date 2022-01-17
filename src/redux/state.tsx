import React from 'react';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = {type: "UPDATE-NEW-POST-TEXT"};
const UPDATE_NEW_MESSAGE_BODY = {type: "UPDATE_NEW_MESSAGE_BODY"};
const SEND_MESSAGE = "SEND_MESSAGE"



export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount:number
}

export type ProfilePageType = {
    posts : Array<PostType>
    newPostText:string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody:string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
export type StoreType ={
    _state: RootStateType
    _callSubscriber: () => void
    getState: ()=> any
    subscribe: (observer:any) => void
    dispatch: (action: any) => void

}

type SidebarType = {}


let store: StoreType = {

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
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrei"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Vuktor"},
                {id: 6, name: "Valera"},
            ],

            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
            ],
            newMessageBody: ""
        },
    },
    _callSubscriber() {
        console.log("state changed");
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },


    dispatch(action: any) { //{type: "ADD-POST"}
        if (action.type === ADD_POST) {
            let newPost : PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""

            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            let addDialogs: MessageType = {
                id: 7,
                message: this._state.dialogsPage.newMessageBody,
            };

            this._state.dialogsPage.messages.push(addDialogs);
            this._state.dialogsPage.newMessageBody = "";
            this._callSubscriber();

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber();
        }
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body: string ) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body:body
})


export default store;


//
// addPost() {
//     let newPost = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         likesCount: 0
//     };
//
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = ""
//
//     this._callSubscriber();
// },
// updateNewPostText(newText: any) {
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber();
// },
//
// addDialogs(name: any) {
//     let addDialogs = {
//         id: 7,
//         name: name
//     };
//     this._state.dialogsPage.dialogs.push(addDialogs)
//     this._callSubscriber()
// },