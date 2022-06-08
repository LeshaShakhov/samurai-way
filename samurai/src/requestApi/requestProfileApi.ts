import axios from "axios";
import {ProfileType} from "../redux/types/types";
import {instance, ResponseType} from "./api";

const instanceWithFile = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '114998e4-9ff2-4cf7-84fe-31cc5f0fa930',
        'Content-Type': 'multipart/form-data'
    },
});
type SetPhotoDataResponseType = {
    photos: { small: string | null, large: string | null }
}
//TODO captcha logic
export const requestProfileApi = {
    getUserProfile(id: number | null) {
        return instance.get<ProfileType>('profile/' + id)
            .then(response => response.data)
    },
    getUserStatus(id: number) {
        return instance.get<string>('profile/status/' + id)
            .then(response => response.data)
    },
    updateUserStatus(status: string) {
        return instance.put<ResponseType>('profile/status', {status: status})
            .then(response => response.data)
    },
    setPhoto(photo: File) {
        const formData = new FormData();
        formData.append("image", photo);
        return instanceWithFile.put<ResponseType<SetPhotoDataResponseType>>(
            '/profile/photo', formData)
            .then(response => response.data)
    },
    updateProfile(data: ProfileType) {
        return instance.put<ResponseType>(
            '/profile',
            data)
            .then(response => response.data)
    },
}