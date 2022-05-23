import React from "react";
import './Messages.css'
import {
    addMessage,
    addMessageActionCreator, changeCurrentConversation,
    changeCurrentConversationActionCreator, changeTextAreaMessage,
    changeTextAreaMessageActionCreator
} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    const {
        newMessageText,
        messages,
        users,
        currentConversation
    } = state.messages;

    const currentUserConversation = users.find(
        user => user.userId === currentConversation
    );

    const currentMessages = messages.filter(
        message => message.authorId === currentConversation
    );

    const set = new Set();
    messages.forEach(message => set.add(message.authorId));
    const conversationMembers = [];
    users.forEach(user => {
        if (set.has(user.userId)) {
            conversationMembers.push(user)
        }
    })
    return {
        conversationMembers: conversationMembers,
        newMessageText: newMessageText,
        currentConversation: currentConversation,
        currentMessages: currentMessages,
        currentUserConversation: currentUserConversation,
    }
};


let MessagesContainer = connect(mapStateToProps, {
    addMessage,
    changeTextAreaMessage,
    changeCurrentConversation,
})(Messages);

export default MessagesContainer;