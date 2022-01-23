import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Posts/Post";

type MyPostsType = {
    posts: any
    updateNewPostText: (text: string) => void
    addPost: () => void
    newPostText: string
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.posts.map((p: any) =>
        <Post key={p.id} message={p.message}
              likesCount={p.likesCount}/>)

    let onAddPosts = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            onAddPosts()
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                        onKeyPress={onKeyPressHandler}
                        placeholder="Enter your post"
                    />

                </div>
                <div>
                    <button onClick={onAddPosts}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts