import React from "react";
import './Messages.css'
import {addMessage, changeCurrentConversation} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import withAuthRedirect from "../../Utils/withAuthRedirect";
import {compose} from "redux";
import {StateType} from "../../redux/redux-store";
import {StaticUserType} from "../../redux/types/types";

const mapStateToProps = (state:StateType) => {
    const {
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
    const conversationMembers:Array<StaticUserType> = [];
    users.forEach(user => {
        if (set.has(user.userId)) {
            conversationMembers.push(user)
        }
    })
    return {
        conversationMembers,
        currentConversation,
        currentMessages,
        currentUserConversation,
    }
};


export default compose<React.ComponentType>(
        withAuthRedirect,
        connect(mapStateToProps, { addMessage, changeCurrentConversation,})
    )(Messages);