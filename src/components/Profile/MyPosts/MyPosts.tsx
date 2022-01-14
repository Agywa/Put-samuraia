import React, {KeyboardEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
import {updateNewPostText} from "../../../redux/state";


const MyPosts = (props: any) => {

    let postsElements =
        props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<any>();

    let addPosts = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                        ref={newPostElement}
                        value={props.newPostText}
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