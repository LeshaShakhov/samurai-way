import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '114998e4-9ff2-4cf7-84fe-31cc5f0fa930'
    },
});

export enum ResponseCodes{
    Success = 0,
    Error = 1,
    captcha = 10
}
type ResponseFieldErrorType = {
    field: string
    error: string
}
export type ResponseType<T={}> = {
    resultCode: ResponseCodes
    messages: Array<string>
    data: T
    fieldsErrors?: Array<ResponseFieldErrorType>
}


