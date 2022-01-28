import React from 'react';
import {ProfilePageType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerType = {
    posts: ProfilePageType
    dispatch: (action: { type: string }) => void
}

const MyPostsContainer = (props: MyPostsContainerType) => {

    let addPosts = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPosts}
            posts={props.posts}
            newPostText={props.posts.newPostText}
        />

    )
}

export default MyPostsContainer