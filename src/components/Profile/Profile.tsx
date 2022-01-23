import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: { type: string; }) => void
}

const Profile = (props: ProfileType) => {

    return (

        <div>

            <ProfileInfo/>
            <MyPostsContainer
                posts={props.profilePage}
                dispatch={props.dispatch}


            />
        </div>

    )
}

export default Profile