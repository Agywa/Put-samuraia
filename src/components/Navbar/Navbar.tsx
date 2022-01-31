import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile"
                         className={({isActive}) => isActive ? s.activeNot : s.activeDat}> Profile </NavLink>
            </div>
            <div>
                <NavLink to="dialogs"
                         className={({isActive}) => isActive ? s.activeNot : s.activeDat}> Messages </NavLink>
            </div>
            <div>
                <NavLink to="news"
                         className={({isActive}) => isActive ? s.activeNot : s.activeDat}> News </NavLink>
            </div>
            <div>
                <NavLink to="music"
                         className={({isActive}) => isActive ? s.activeNot : s.activeDat}> Music </NavLink>
            </div>
            <div>
                <NavLink to="settings"
                         className={({isActive}) => isActive ? s.activeNot : s.activeDat}> Settings </NavLink>
            </div>
            <div>
                <NavLink to="users"
                         className={({isActive}) => isActive ? s.activeNot : s.activeDat}> Users </NavLink>
            </div>

        </nav>
    )

}

export default Navbar