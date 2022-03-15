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
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: any
}

// export type LocationUsersType = {
//     city: string,
//     country: string
// }
// export type UsersType = {
//     id: number,
//     photoUrl: string
//     followed: boolean,
//     fullName: string,
//     status: string,
//     location:LocationUsersType
// }
// export type UsersPageType = {
//     users: Array<UsersType>
// }


export type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}
export type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type UpdateNewMessageBody = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
export type SendMessage = {
    type: "SEND-MESSAGE"
    newMessageBody: string
}

export type FollowUsers = {
    type: "FOLLOW"
    usersID: number
}
export type UnfollowUsers = {
    type: "UNFOLLOW"
    usersID: number
}
export type SetUsersType = {
    type: "SET_USERS"
    users: any
}

export type ActionTypes =
    AddPostActionType
    | UpdateNewPostTextType
    | UpdateNewMessageBody
    | SendMessage
    | FollowUsers
    | UnfollowUsers
    | SetUsersType


//
// export type StoreType = {
//     _state: RootStateType
//     _callSubscriber: () => void
//     getState: () => RootStateType
//     subscribe: (observer: any) => void
//     dispatch: (action: any) => void
//
// }
// type SidebarType = {}
//
// //
// export let store: StoreType = {
//
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likesCount: 12},
//                 {id: 2, message: "It's my first post", likesCount: 11},
//                 {id: 3, message: "Bla Bla", likesCount: 11},
//                 {id: 4, message: "Dada", likesCount: 11},
//             ],
//             newPostText: ""
//         },
//
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Dimych"},
//                 {id: 2, name: "Andrei"},
//                 {id: 3, name: "Sveta"},
//                 {id: 4, name: "Sasha"},
//                 {id: 5, name: "Vuktor"},
//                 {id: 6, name: "Valera"},
//             ],
//
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How is your it-kamasutra?"},
//                 {id: 3, message: "Yo"},
//                 {id: 4, message: "Yo"},
//                 {id: 5, message: "Yo"},
//             ],
//             newMessageBody: ""
//         },
//
//         sidebar: {}
//     },
//
//     _callSubscriber() {
//         console.log("state changed");
//     },
//
//     getState() {
//         return this._state
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action: ActionTypes) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber();
//     }
// }
//
//
