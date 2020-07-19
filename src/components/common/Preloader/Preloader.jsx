import React from "react";
import s from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.gif";

let Preloader = (props) => {
    return (
        <img className={s.width} src={preloader}/>
    )
}
export default Preloader;