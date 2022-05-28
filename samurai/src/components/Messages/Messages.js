import React from "react";
import './Messages.css'
import Conversation from "./Conversation/Conversation";
import ConversationItem from "./InterlocutorItem/ConversationItem";
import MessageForm from "./MessageForm";

const Messages = ({
                      addMessage,
                      changeCurrentConversation,
                      conversationMembers,
                      currentConversation,
                      currentMessages,
                      currentUserConversation,
                      ...props
                  }) => {
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

                    <MessageForm addMessage={addMessage}/>
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