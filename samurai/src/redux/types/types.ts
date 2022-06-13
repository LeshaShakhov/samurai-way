export type AuthData = {
    email: string
    password: string
    remember: boolean
    captcha: string
}
export type PostType = {
    id: number
    text: string
    likes: number
}
export type MessageAPIType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export type ProfileType = {
    userId?: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType,
    photos: PhotoType
    aboutMe: string|null
};
export type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotoType = {
    small: string | null
    large: string | null
}
export interface UserType {
    id: number
    name: string
    status: string
    photos: PhotoType
    followed: boolean
}

export type StaticMyUserType = {
    userId: number,
    userName: string,
    userSurname: string,
    userImage: string,
    userPosts: Array<PostType>
}
export type StaticUserType = {
    userId: number,
    userName: string,
    userSurname: string,
    userImage: string,
    userPosts: Array<PostType>,
    messages: Array<MessageAPIType>,
}
export type UsersFilterType = {
    term:string
    onlyFollowed: boolean | null
}