import React from 'react';
import s from './ProfileDescription.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileDescription = (props) => {
debugger
    return (
        <div>

            <div>
                Full Name: {props.profile.fullName}
            </div>
            <div>
                looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            { props.profile.lookingForAJob &&
                <div>
                    My professional skills : {props.lookingForAJobDescription}
                </div>
            }
            <div>
                About Me: {props.profile.aboutMe}
            </div>
            <div>
                looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>

            <ProfileStatusWithHooks status={props.status}
                                    updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileDescription;