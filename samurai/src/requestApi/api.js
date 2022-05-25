import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '114998e4-9ff2-4cf7-84fe-31cc5f0fa930'
    },
});


export const requestUsersApi = {
    getUsers(page = 1, usersPerPage = 10) {
        return instance.get(`users?page=${page}&count=${usersPerPage}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post('follow/' + id)
            .then(response => response.data)
    },
    unFollow(id) {
        return instance.delete('follow/' + id)
            .then(response => response.data)
    },
    getAuthUserData() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
};

export const requestProfileApi = {
    getUserProfile(id) {
        return instance.get('profile/' + id)
            .then(response => response.data )
    },
    getUserStatus(id) {
        return instance.get('profile/status/' + id)
            .then(response => response.data)
    },
}

