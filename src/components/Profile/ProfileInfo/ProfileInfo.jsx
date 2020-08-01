import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDescription from "./ProfileDescription";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.mainProfileBlock}>
            <div className={s.imgBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt=""/>
                {props.isOwner && <input className={s.fileBtn} type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            <div className={s.descriptionBlock}>
                <ProfileDescription status={props.status}
                                    updateStatus={props.updateStatus}
                                    profile={props.profile}/>
            </div>
        </div>
    )
}

export default ProfileInfo;