import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Posts/Post";


const MyPosts = (props: any) => {
/*
    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Bla Bla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11},
    ]*/

    let postsElements =
        props.posts.map ( (p: any) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts