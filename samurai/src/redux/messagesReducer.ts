import {PostType, MessageType, StaticMyUserType, StaticUserType} from "./types/types";

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_CURRENT_CONVERSATION = 'CHANGE-CURRENT-CONVERSATION';

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
        {id: 1, authorId: 2, text: 'Lorem Ipsum - это текст-"рыба",'},
        {id: 2, authorId: 2, text: 'Hello, my name is Igor'},
        {id: 4, authorId: 3, text: 'Hello, my name is Sasha'},
        {id: 5, authorId: 3, text: 'I liked your ava'},
        {id: 6, authorId: 4, text: 'I hate you'},
        {id: 7, authorId: 4, text: 'my name is Yorik'},
        {id: 9, authorId: 5, text: 'Hello, my name is Stanislav'},
        {id: 10, authorId: 6, text: 'Hello, my name is Kesha'},
        {id: 11, authorId: 7, text: 'Hello, my name is Sergey'},
        {id: 12, authorId: 7, text: 'How are you?'},
    ] as Array<MessageType>,
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

export type InitialStateType = typeof initialState;

let messagesReducer = (state = initialState, action : any):InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: ++state.messages.length, text: action.message, authorId: 2}
                ],
            };
        }
        case CHANGE_CURRENT_CONVERSATION: {
            return {...state, currentConversation: action.id}
        }
        default:
            return state
    }
}
type addMessageType = {
    type: typeof ADD_MESSAGE,
    message: string
}
export const addMessage = (message:string):addMessageType => ({type: ADD_MESSAGE, message})
type changeCurrentConversationType = {
    type: typeof CHANGE_CURRENT_CONVERSATION,
    id: number,
}
export const changeCurrentConversation = (id:number):changeCurrentConversationType => ({
    type: CHANGE_CURRENT_CONVERSATION,
    id: id,
})

export default messagesReducer;