import React, { useState } from 'react';
import chatData from '../data/chatData'
import ChatListPane from '../components/ChatListPane';
import ChatHistoryPane from '../components/ChatHistoryPane';


function ChatPage(props) {
    const [chats, setChats] = useState([...chatData])  

    const [currentChat, setCurrentChat] = useState(0)

    return (
        <div className='outlet-layout'>
            {/* <div className='bg-black-v3'>

            </div> */}
            <div className='xl:hidden text-center text-lg'>
                Only available on desktop screens for now 🙂
            </div>
            <div className='hidden xl:grid grid-cols-3 gap-6'>
                {/* chatlist pane */}
                
                <ChatListPane 
                currentChat={currentChat}
                setCurrentChat={setCurrentChat}
                chats={chats}
                />
                


                {/* chat history pane */}
                <ChatHistoryPane
                currentChat={currentChat}
                chats={chats}
                />
            </div>
        </div>
    );
}

export default ChatPage;