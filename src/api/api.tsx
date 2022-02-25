import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: ` https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3f385e76-7c0c-48a1-8968-cfba08fe4aaf"
    },
});

export const usersAPI = {
     getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                return response.data
            })
    },
}


export const unfollowedUsers = (id: number) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        })
}
export const followedUsers = (id: number) => {
    return axios.post(` https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
        {
            withCredentials: true,
            headers: {
                "API-KEY": "3f385e76-7c0c-48a1-8968-cfba08fe4aaf"
            }
        }
    )
        .then(response => {
                return response.data
            }
        )
}

export const loginUsers = () => {
    return  instance.get(` https://social-network.samuraijs.com/api/1.0/auth/me`)
        .then(response => {
            return response.data
        })
}