import React from "react";
import './ChatMessages.css'
import {Chat} from "./Chat";

const ChatPage:React.FC<{}> = () => {
  return(
      <div className='app-block full-height'>
          <div className='text-title'>Chat</div>
          <Chat/>
      </div>
  )
}

export default ChatPage