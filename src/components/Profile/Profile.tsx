import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";


const Profile = (props: any) => {

    return (

        <div>

            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost}
            />
        </div>

    )
}

export default Profile