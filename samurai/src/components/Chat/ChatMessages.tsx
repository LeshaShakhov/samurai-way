import React from "react";
import {Message} from "../Common/Message/Message";
import {connect, ConnectedProps} from "react-redux";
import {StateType} from "../../redux/store";
type ChatMessagesStateType = {
    isAutoScrolling: boolean
}
class ChatMessages extends React.Component<PropsFromRedux, ChatMessagesStateType> {
    private readonly messagesScrollRef: React.RefObject<HTMLDivElement>;

    constructor(props: PropsFromRedux) {
        super(props);
        this.state = {
            isAutoScrolling: true
        }
        this.messagesScrollRef = React.createRef<HTMLDivElement>()
    }

    scrollHandler = (e: React.UIEvent<HTMLElement>) => {
        const isScrolledToBottom: boolean = e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight
        this.setState({isAutoScrolling: isScrolledToBottom});
        console.log(e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight)
    }
    scrollToBottom = () => {
        if (this.state.isAutoScrolling) {
            setTimeout(() => {
                this.messagesScrollRef.current?.scrollIntoView({behavior: "smooth"})
            }, 200)
        }
    }

    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate(prevProps: Readonly<PropsFromRedux>, prevState: Readonly<ChatMessagesStateType>, snapshot?: any) {
        if (prevProps.chatMessages !== this.props.chatMessages) {
            this.scrollToBottom()
        }
    }

    render() {
        return (
            <div className='chat-messages' onScroll={this.scrollHandler}>
                {
                    this.props.chatMessages.map((mes) => <Message key={mes.id} message={mes.message} photo={mes.photo}
                                                                  userName={mes.userName}/>)
                }
                <div ref={this.messagesScrollRef}></div>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        chatMessages: state.chatSlice.chatMessages
    }
}
const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>
export const ChatMessagesContainer = connector(ChatMessages)