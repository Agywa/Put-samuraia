import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: ` https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "13e54018-a3f1-4e4e-b65a-5bd1af04a1ec"
    },
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
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
                "API-KEY": "13e54018-a3f1-4e4e-b65a-5bd1af04a1ec"
            }
        }
    )
        .then(response => {
                return response.data
            }
        )
}

export const getProfile = (userId: number) => {
    return instance.get(`profile/` + userId)
}
export const getStatus = (userId: number) => {
    return instance.get(`profile/status/` + userId)
}
export const updateStatus = (status:string) => {
    return instance.put(`profile/status/`,{status} )
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)

    }
}