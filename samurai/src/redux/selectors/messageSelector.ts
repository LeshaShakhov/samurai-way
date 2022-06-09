import {StateType} from "../store";
import {MessageType, StaticUserType} from "../types/types";


const _getMessageAuthors = (state:StateType) => {
    return new Set(state.message.messages.map(mes => mes.authorId));
}
export const getConversationMembers = (state:StateType): Array<StaticUserType> => {
    const authors = _getMessageAuthors(state);
    return state.message.users.filter( user => authors.has(user.userId))
}
export const getCurrentMessages = (state:StateType, currentConversation:number|null): Array<MessageType> => {
    return state.message.messages.filter( message => message.authorId === currentConversation)
}
export const getConversationMember = (state:StateType, currentConversation:number|null): StaticUserType |undefined => {
    return state.message.users.find( user => user.userId === currentConversation )
}