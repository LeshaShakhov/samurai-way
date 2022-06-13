import React from "react";
import './Messages.css'
import {Message} from "../Common/Message/Message";
import {ConversationItem} from "./InterlocutorItem/ConversationItem";
import {MessageForm} from "./MessageForm";
import {useSelector} from "react-redux";
import {
    getConversationMembers,
    getCurrentConversation,
    getCurrentMessages
} from "../../redux/selectors/messageSelector";
import withAuthRedirect from "../../Utils/withAuthRedirect";

const Messages: React.FC<{}> = () => {

    const conversationMembers = useSelector(getConversationMembers)
    const currentConversation = useSelector(getCurrentConversation)
    const currentMessages = useSelector(getCurrentMessages)

    return (
        <div className='app-block'>
            <div className='text-title'>Dialogs</div>
            <div className='flex flex-between'>
                <div className='interlocutors'>
                    {
                        conversationMembers.map(interlocutor =>
                            <ConversationItem
                                key={interlocutor.userId}
                                id={interlocutor.userId}
                                currentConversation={currentConversation}
                                interlocutor={`${interlocutor.userName} ${interlocutor.userSurname}`}
                                userImage={interlocutor.userImage}
                            />
                        )
                    }
                </div>
                <div className="dialogs-separator"/>
                <div className='dialogs'>
                    <MessageForm/>
                    {
                        currentConversation ?
                            (currentMessages.map((mes, index) => {
                                let {message, userName, photo} = mes;
                                return (
                                    <Message
                                        message={message}
                                        key={index}
                                        photo={photo}
                                        userName={userName}
                                    />)
                            })) : (<div className='text-center'>Выберите собеседника</div>)
                    }

                </div>
            </div>
        </div>
    )
}

export default withAuthRedirect(Messages)