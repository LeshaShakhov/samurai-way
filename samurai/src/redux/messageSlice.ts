import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MessageAPIType, PostType, StaticMyUserType, StaticUserType} from "./types/types";


let initialState = {
    currentConversation: null as number | null,
    newMessageText: '' as string,
    user: {
        userId: 1,
        userName: 'Maxim',
        userSurname: 'Petrov',
        userImage: 'http://www.yorki-penza.ru/img/djey/djey_01.jpg',
        userPosts: [
            {id: 1, text: 'Hello, how are you?', likes: 3},
            {id: 2, text: 'I am learn react.', likes: 5},
            {id: 3, text: 'I have very nice day!', likes: 10}
        ] as Array<PostType>,
    } as StaticMyUserType,

    messages: [
        {userName: 'Igor',userId: 2, photo:'http://www.yorki-penza.ru/img/feya/feya_01.jpg', message: 'Lorem Ipsum - это текст-"рыба",'},
        {userName: 'Igor',userId: 2, photo:'http://www.yorki-penza.ru/img/feya/feya_01.jpg', message: 'Hello, my name is Igor'},
        {userName: 'Sasha',userId: 3, photo:'http://www.yorki-penza.ru/img/djey/djey_01.jpg', message: 'Hello, my name is Sasha'},
        {userName: 'Sasha',userId: 3, photo:'http://www.yorki-penza.ru/img/djey/djey_01.jpg', message: 'I liked your ava'},
        {userName: 'Yorik',userId: 4, photo:'https://c-fa.cdn.smule.com/rs-s35/arr/9b/60/57f41f9c-ed7e-41a6-afaf-c2886cd11e67.jpg', message: 'I hate you'},
        {userName: 'Yorik',userId: 4, photo:'https://c-fa.cdn.smule.com/rs-s35/arr/9b/60/57f41f9c-ed7e-41a6-afaf-c2886cd11e67.jpg', message: 'my name is Yorik'},
        {userName: 'Stanislav',userId: 5, photo:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye8.jpg?itok=I8zcCWtL', message: 'Hello, my name is Stanislav'},
        {userName: 'Kesha',userId: 6, photo:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye9.jpg?itok=emjbNAgP', message: 'Hello, my name is Kesha'},
        {userName: 'Sergey',userId: 7, photo:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye7.jpg?itok=mHFsRXtQ', message: 'Hello, my name is Sergey'},
        {userName: 'Sergey',userId: 7, photo:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye7.jpg?itok=mHFsRXtQ', message: 'How are you?'},
    ] as Array<MessageAPIType>,
    users: [
        {
            userId: 2,
            userName: 'Igor',
            userSurname: 'IgorIgor',
            userImage: 'http://www.yorki-penza.ru/img/feya/feya_01.jpg',
            userPosts: [],
            messages: [],
        },
        {
            userId: 3,
            userName: 'Sasha',
            userSurname: 'SashaSasha',
            userImage: 'http://www.yorki-penza.ru/img/djey/djey_01.jpg',
            userPosts: [],
            messages: [],
        },
        {
            userId: 4,
            userName: 'Yorik',
            userSurname: 'YorikYorik',
            userImage: 'https://c-fa.cdn.smule.com/rs-s35/arr/9b/60/57f41f9c-ed7e-41a6-afaf-c2886cd11e67.jpg',
            userPosts: [],
            messages: [],
        },
        {
            userId: 5,
            userName: 'Stanislav',
            userSurname: 'StanislavStanislav',
            userImage: 'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye8.jpg?itok=I8zcCWtL',
            userPosts: [],
            messages: [],
        },
        {
            userId: 6,
            userName: 'Kesha',
            userSurname: 'KeshaKesha',
            userImage: 'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye9.jpg?itok=emjbNAgP',
            userPosts: [],
            messages: [],
        },
        {
            userId: 7,
            userName: 'Sergey',
            userSurname: 'SergeySergey',
            userImage: 'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye7.jpg?itok=mHFsRXtQ',
            userPosts: [],
            messages: [],
        },
        {
            userId: 8,
            userName: 'NoNONO',
            userSurname: 'Not this user',
            userImage: 'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye7.jpg?itok=mHFsRXtQ',
            userPosts: [],
            messages: [],
        }
    ] as Array<StaticUserType>
}

export type InitialState = typeof initialState;

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state:InitialState, action:PayloadAction<string>) => {
            state.messages.push(
                {message: action.payload, userId: 2, photo:'https://social-network.samuraijs.com/activecontent/images/users/24152/user.jpg?v=33', userName: 'losha'}
            )
        },
        changeCurrentConversation: (state:InitialState, action:PayloadAction<number>) => {
            state.currentConversation = action.payload
        }
    },

})


export const { addMessage, changeCurrentConversation} = messageSlice.actions
export default messageSlice.reducer