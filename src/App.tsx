import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: RootStateType
    dispatch: (action: { type: string; }) => void
}

const App: React.FC<AppPropsType> = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}/>

                    <Route path="/dialogs" element={<DialogsContainer
                        state={props.state.dialogsPage}
                        dispatch={props.dispatch}


                    />}/>

                    <Route path="/news" element={<News/>}/>

                    <Route path="/music" element={<Music/>}/>

                    <Route path="/settings" element={<Settings/>}/>

                </Routes>
            </div>
        </div>


    )
}

export default App;