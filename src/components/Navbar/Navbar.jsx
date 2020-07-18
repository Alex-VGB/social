import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

console.log(s);

const Navbar = (props) => {

    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink activeClassName={s.active} to='/profile'>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink activeClassName={s.active} to='/dialogs'>Messages</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink activeClassName={s.active} to='/users'>Users</NavLink>
                </div>
                <div className={s.item}>
                    <a>News</a>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Settings</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;