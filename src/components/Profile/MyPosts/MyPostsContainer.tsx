import React from 'react';
import {RootStateType} from "../../../redux/store";
import {addPostActionCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";


const mapStateToProps = (store: RootStateType) => {
    return {
        profilePage: store.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {

        addPost: (post:string) => {
            dispatch(addPostActionCreator(post))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer

// type MyPostsContainerType = {
//     posts: ProfilePageType
//     dispatch: (action: { type: string }) => void
// }

// const MyPostsContainer = (props: MyPostsContainerType) => {
//
//     let addPosts = () => {
//         props.dispatch(addPostActionCreator())
//     }
//
//     let onPostChange = (text: string) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.dispatch(action);
//
//     }
//
//     return (
//         <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPosts}
//             posts={props.posts}
//             newPostText={props.posts.newPostText}
//         />
//
//     )
// }
