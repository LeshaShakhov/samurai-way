import React from "react";
import './Messages.css'
import Conversation from "./Conversation/Conversation";
import ConversationItem from "./InterlocutorItem/ConversationItem";
import {addMessage, changeCurrentConversation, changeTextAreaMessage} from "../../redux/messagesReducer";

const Messages = (props) => {
    const {
        addMessage,
        changeTextAreaMessage,
        changeCurrentConversation,
        conversationMembers,
        newMessageText,
        currentConversation,
        currentMessages,
        currentUserConversation,
    } = props;

    let onSubmit = (e) => {
        addMessage();
        e.preventDefault();
    }
    let onChange = (e) => {
        changeTextAreaMessage(e.target.value);
    }
    return (
        <div className='app-block'>
            <div className='text-title'>Dialogs</div>
            <div className='flex flex-between'>
                <div className='interlocutors'>
                    {
                        conversationMembers.map(interlocutor =>
                            <ConversationItem
                                onChangeConversation={changeCurrentConversation}
                                key={interlocutor.userId}
                                id={interlocutor.userId}
                                interlocutor={`${interlocutor.userName} ${interlocutor.userSurname}`}
                                userImage={interlocutor.userImage}
                            />
                        )
                    }
                </div>
                <div className="dialogs-separator"></div>
                <div className='dialogs'>
                    <form className='form' onSubmit={(e) => {
                        onSubmit(e)
                    }}>
                        <textarea
                            className='input'
                            value={newMessageText}
                            placeholder="Your message..."
                            onChange={(e) => {
                                onChange(e)
                            }}
                        />
                        <input className='btn-primary' value='Send' type="submit"/>
                    </form>
                    {
                        currentConversation ?
                            (currentMessages.map((message => {
                                let {text, id} = message;
                                return (
                                    <Conversation
                                        text={text}
                                        key={id}
                                        avatar={currentUserConversation.userImage}
                                    />)
                            }))) : (<div className='text-center'>Выберите собеседника</div>)
                    }

                </div>
            </div>
        </div>
    )
}


export default Messages;