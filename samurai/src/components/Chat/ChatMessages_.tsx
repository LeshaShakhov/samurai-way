import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/store";
import {Message} from "../Common/Message/Message";

export const ChatMessages_: React.FC<{}> = () => {
    const chatMessages = useSelector((state: StateType) => state.chatSlice.chatMessages);
    const [isAutoScrolling, setAutoScrolling] = useState(true);
    const messagesScrollRef = useRef<HTMLHeadingElement>(null)
    const scrollHandler = (e: React.UIEvent<HTMLElement>) => {
        setAutoScrolling(e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight);
        console.log(e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight)
    }
    useEffect(() => {
        if (isAutoScrolling) {
            setTimeout(() => {
                messagesScrollRef.current?.scrollIntoView({behavior: "smooth"})
            }, 200)
        }
    }, [chatMessages])
    return (
        <div className='chat-messages' onScroll={scrollHandler}>
            {
                chatMessages.map((mes) => <Message key={mes.id} message={mes.message} photo={mes.photo}
                                                   userName={mes.userName}/>)
            }
            <div ref={messagesScrollRef}></div>
        </div>
    )
}