import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
import {ProfilePageType} from "../../../redux/store";
import {useFormik} from "formik";

type MyPostsType = {
    profilePage: ProfilePageType
    addPost: (post: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.profilePage.posts.map((p: any) =>
        <Post key={p.id} message={p.message}
              likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <AddNewPostForm
                    addPost={props.addPost}
                />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

type AddNewPostFormType = {
    addPost: (post: string) => void
}

const AddNewPostForm = (props: AddNewPostFormType) => {
    const formik = useFormik({
        initialValues: {
            post: '',
        },
        onSubmit: values => {
            props.addPost(values.post)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea
                    name="post"
                    onChange={formik.handleChange}
                    value={formik.values.post}
                    placeholder="Enter your post"
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};


export default MyPosts