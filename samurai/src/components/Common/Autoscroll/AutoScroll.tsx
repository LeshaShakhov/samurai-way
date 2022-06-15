import React, {useEffect, useRef} from "react";
import {DialogMessageType} from "../../../redux/dialogsSlice";
import {MessagePerformanceType} from "../../../redux/chatSlice";
import './Autoscroll.css'
import {useSelector} from "react-redux";
import {StateType} from "../../../redux/store";
type AutoScrollType = {
    items: Array<DialogMessageType> | Array<MessagePerformanceType>
    Component: any //TODO убрать any type
    goToDialogs?: (userId: number, photo: string, userName: string) => void
    myPhoto?: string | null
    currentDialog?: {id: number, photos: string, userName: string} | null
}
export const AutoScroll: React.FC<AutoScrollType> = React.memo(({Component, items, goToDialogs, myPhoto, currentDialog}) => {
    const myId = useSelector((state: StateType) => state.auth.authUserData.id)
    const messagesScrollRef = useRef<HTMLHeadingElement>(null)
    const isAutoScrolling = useRef(true)
    const scrollHandler = (e: React.UIEvent<HTMLElement>) => {
        isAutoScrolling.current = (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight);
    }
    useEffect(() => {
        if (isAutoScrolling.current) {
            setTimeout(() => {
                messagesScrollRef.current?.scrollIntoView({behavior: "smooth"})
            }, 200)
        }
    }, [items])
    return (
        <div className='items' onScroll={scrollHandler}>
            {items.map(item => <Component
                key={item.id}
                {...item}
                myId={myId}
                myPhoto={myPhoto}
                currentDialog={currentDialog}
                goToDialogs={goToDialogs}
            />)}
            <div ref={messagesScrollRef}/>
        </div>
    )
})