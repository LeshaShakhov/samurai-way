import {AuthData, UsersFilterType, UserType} from "../redux/types/types";
import {instance, ResponseType} from "./api";

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export type AuthMeDataResponseType = {
    id: number, email: string, login: string
}
export type LoginDataResponseType = {
    userId?: number
}
export const requestUsersApi = {
    getUsers(page = 1, usersPerPage = 10, filter:UsersFilterType) {
        return instance.get<GetUsersResponseType>(`users?page=${page}&count=${usersPerPage}&term=${filter.term}` + (filter.onlyFollowed === null ? `` : `&friend=${filter.onlyFollowed}`))
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post<ResponseType>('follow/' + id)
            .then(response => response.data)
    },
    unFollow(id: number) {
        return instance.delete<ResponseType>('follow/' + id)
            .then(response => response.data)
    },
    getAuthUserData() {
        return instance.get<ResponseType<AuthMeDataResponseType>>('auth/me')
            .then(response => response.data)
    },
    login(data: AuthData) {
        return instance.post<ResponseType<LoginDataResponseType>>('/auth/login',
            {email: data.email, password: data.password, rememberMe: data.remember, captcha: data.captcha}
        ).then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseType>('/auth/login')
            .then(response => response.data)
    },
    getCaptchaUrl() {
        return instance.get<{url:string}>('/security/get-captcha-url')
            .then(response => response.data)
    }
};