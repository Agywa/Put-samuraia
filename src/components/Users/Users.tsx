import React from "react";
import styles from "./users.module.css";
import {UserType} from "../../redux/users_reduser";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {followedUsers, unfollowedUsers} from "../../api/api";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    unfollow: (usersID: number) => void
    follow: (usersID: number) => void
}

export let Users = (props: UsersType) => {
    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => <span
                className={props.currentPage === p ? styles.selectedPage : ""}
                onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>)}
        </div>
        {props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink key={u.id} to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                unfollowedUsers(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>Unfollow</button> :

                            <button onClick={() => {
                                followedUsers(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                            }}>Follow</button>}

                    </div>
                </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>

                    </span>
                </span>

        </div>)
        }

    </div>
}