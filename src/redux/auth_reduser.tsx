import React from "react";


const SET_USER_DATA = "SET_USER_DATA";


export type initialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean

}

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}


type SetUserData = {
    type: "SET_USER_DATA"
    data: initialStateType
    isAuth: boolean
}

export type ActionTypes =
    SetUserData


const authReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true,
            }
        default:
            return state;
    }
}


export default authReducer;

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
})
