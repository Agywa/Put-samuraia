import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {

}

const Profile = (props:ProfileType) => {

    return (

        <div>

            <ProfileInfo/>
            <MyPostsContainer


            />
        </div>

    )
}

export default Profile