import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reduser";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

export type AppStateType =ReturnType<typeof rootReducer>



export let store = createStore(rootReducer);