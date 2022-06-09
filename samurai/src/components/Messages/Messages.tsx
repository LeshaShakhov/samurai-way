import React from "react";
import './Messages.css'
import {Conversation} from "./Conversation/Conversation";
import {ConversationItem} from "./InterlocutorItem/ConversationItem";
import {MessageForm} from "./MessageForm";
import {useSelector} from "react-redux";
import {getConversationMember, getConversationMembers, getCurrentMessages} from "../../redux/selectors/messageSelector";
import {StateType} from "../../redux/store";
import withAuthRedirect from "../../Utils/withAuthRedirect";


export const Messages:React.FC<{}> = () => {
    const conversationMembers = useSelector((state:StateType) => getConversationMembers(state))
    const currentConversation = useSelector((state:StateType) => state.message.currentConversation)
    const currentMessages = useSelector((state:StateType) => getCurrentMessages(state, currentConversation))
    const conversationMember = useSelector((state:StateType) => getConversationMember(state, currentConversation))

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
                            (currentMessages.map((message => {
                                let {text, id} = message;
                                return (
                                    <Conversation
                                        text={text}
                                        key={id}
                                        avatar={conversationMember?.userImage}
                                    />)
                            }))) : (<div className='text-center'>Выберите собеседника</div>)
                    }

                </div>
            </div>
        </div>
    )
}

export default withAuthRedirect(Messages)