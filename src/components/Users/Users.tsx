import React from "react";
import styles from "./users.module.css";
import {UserType} from "../../redux/users_reduser";
import {UsersPropsType} from "./UsersContainer";


let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://uznayvse.ru/person/andrey-averin/andrei_averin01.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "I am a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://uznayvse.ru/person/andrey-averin/andrei_averin01.jpg",
                followed: true,
                fullName: "Sasha",
                status: "I am a boss too",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://uznayvse.ru/person/andrey-averin/andrei_averin01.jpg",
                followed: false,
                fullName: "Andrew",
                status: "I am a boss too",
                location: {city: "Kiev", country: "Ukraine"}
            },
        ])
    }
    return <div>
        {
            props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :

                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>

            </div>)
        }
    </div>
}
export default Users


