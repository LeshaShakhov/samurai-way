import {StateType} from "../store";


const _getMessageAuthors = (state:StateType) => {
    return new Set(state.message.messages.map(mes => mes.userId));
}

export const getCurrentConversation = (state:StateType) => {
    return state.message.currentConversation
}

export const getConversationMembers = (state:StateType) => {
    const authors = _getMessageAuthors(state);
    return state.message.users.filter( user => authors.has(user.userId))
}
export const getCurrentMessages = (state:StateType) => {
    return state.message.messages.filter( message => message.userId === getCurrentConversation(state))
}
export const getConversationMember = (state:StateType) => {
    return state.message.users.find( user => user.userId === getCurrentConversation(state) )
}