import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Posts/Post";


const MyPosts = (props: any) => {

    let postsElements =
        props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<any>();

    let addPosts = () => {

        let text = newPostElement.current.value;
        props.addPost(text);
    }


    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
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