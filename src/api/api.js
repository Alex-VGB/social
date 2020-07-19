import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "93d495cc-3704-42d5-9748-343d03e9ff87"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}
export const followedAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
}

