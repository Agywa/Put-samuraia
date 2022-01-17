import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}

const Profile = (props: ProfileType) => {

    return (

        <div>

            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage}
                dispatch={props.dispatch}


            />
        </div>

    )
}

export default Profile