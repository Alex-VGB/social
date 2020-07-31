import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/head_logo.svg'
import userPhoto from "../../assets/images/user.png";

const Header = (props) => {
    return <header className={s.header}>
        <img src={logo}/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div className={s.colorLogin}>{props.login}
                    <img src={props.profile.photos.large || userPhoto} className={s.mainPhotoSmall} alt=""/>
                    <button className={s.loginBtn} onClick={props.logout}>Log out</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;