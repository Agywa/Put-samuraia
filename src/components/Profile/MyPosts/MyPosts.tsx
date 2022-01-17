import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
import {addPostActionCreator, ProfilePageType, updateNewPostTextActionCreator} from "../../../redux/state";

type MyPostsType = {
    posts: ProfilePageType
    dispatch: (action: any) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.posts.map((p: any) => <Post key={p.id} message={p.message}
                                                                likesCount={p.likesCount}/>)


    let addPosts = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            addPosts()
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.posts.newPostText}
                        onKeyPress={onKeyPressHandler}/>
                </div>
                <div>
                    <button onClick={addPosts}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts