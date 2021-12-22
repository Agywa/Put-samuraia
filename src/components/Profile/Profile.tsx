import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props: any) => {

    return (

        <div>

            <ProfileInfo/>
            <MyPosts posts={props.state.posts} />
        </div>

    )
}

export default Profile