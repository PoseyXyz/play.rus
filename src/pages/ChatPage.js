import React, { useState, useEffect } from 'react';
import { FaSearch, FaUserFriends, FaHamburger, FaPaperPlane, FaPhotoVideo, FaSmile } from 'react-icons/fa'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import chatData from '../data/chatData'


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
                {/* friends box */}
                <div className={`${currentChat===0? 'col-span-3':'col-span-1'} bg-black-v3 rounded-xl lg:p-4 lg:pr-0 flex flex-col gap-6`}>

                    {/* search bar and friend icon */}
                    <div className='flex gap-4 justify-between lg:pr-4'>
                        <div className='relative flex w-4/5'>
                            <i className='absolute self-center left-4 text-sm'><FaSearch /></i>
                            <input placeholder='Search' className='rounded-3xl post-box w-full p-2.5 px-10 outline-none text-typography-grey text-sm tracking-wide focus:text-white border border-transparent delay-75 duration-150 focus:border-brand-purple' />
                        </div>
                        <div className='bg-black-v3 rounded-full post-box flex items-center px-4 py-2'>
                            <i className=''>
                                <FaUserFriends />
                            </i>
                        </div>
                    </div>

                    {/* friends list */}
                    <p className={`${currentChat===0? 'block':'hidden'} text-typography-grey text-center text-xs`}>Select a chat to send a direct message</p>
                    <div className='flex flex-col gap-4 chat-list overflow-y-auto'>
                        {chats.map(chat => {
                            const { id, name, imageUrl, chatHistory } = chat
                            return (
                                <button className={`${currentChat === id ? 'border-brand-purple shadow-lg' : 'border-transparent'} hover:bg-brand-purple group mr-4 duration-300 border-l-4 flex flex-col lg:flex-row gap-4 post-box p-3 rounded-md`} onClick={() => setCurrentChat(id)} key={id}>

                                    <img src={imageUrl} className='rounded-full w-10 h-10' alt="friend_avatar" />
                                    <div className='flex flex-col gap-1 w-full'>
                                        <span className='flex gap-2 justify-between items-center'><span className='text-sm'>{name}</span><span className='flex text-xs text-typography-grey group-hover:text-white font-medium'>22:30</span></span>
                                        <p className='text-typography-grey group-hover:text-white text-sm text-left tracking-wide leading-6'>{chatHistory[chatHistory.length - 1].message}</p>
                                    </div>

                                </button>
                            )
                        })}
                    </div>
                </div>


                {/* chat history pane */}
                <div className={`${currentChat===0? 'hidden':'flex'} col-span-2 bg-black-v3 rounded-xl lg:p-6 lg:pr-0 flex-col gap-4`}>

                    {
                        chats.filter(chat => chat.id === currentChat).map(chat => {
                            const { id, name, online, imageUrl, chatHistory } = chat
                            const chatItem = chatHistory.map(historyItem => {
                                const { id, user, message } = historyItem
                                return (
                                    <div className={`${user ? 'bg-brand-purple self-end lg:mr-4' : 'post-box self-start'} flex items-center gap-4 rounded-lg px-4 py-3`} key={id}>
                                        <p>{message}</p>
                                        <span className={`${user ? 'text-typography-white' : 'text-typography-grey'} text-xs font-light`}>22:02</span>
                                    </div>
                                )
                            })
                            return (
                                <>
                                    {/* header */}
                                    <div className='flex justify-between items-center lg:pr-4' key={id}>

                                        <div className={`flex flex-col lg:flex-row gap-4 p-3 rounded-md`} key={id}>

                                            <img src={imageUrl} className='rounded-full w-10 h-10' />
                                            <div className='flex flex-col gap-1'>
                                                <span className='flex gap-2 justify-between items-center'><span className='text-sm'>{name}</span></span>
                                                <p className='text-typography-grey text-xs text-left tracking-wide leading-6'>{online ? 'Online' : 'Offline'}</p>
                                            </div>

                                        </div>

                                        <div className='bg-black-v3 rounded-full post-box flex items-center px-3 py-3'>
                                            <i className='text-white'>
                                                <BiDotsVerticalRounded />
                                            </i>
                                        </div>


                                    </div>

                                    {/* chat */}
                                    <div className='chat-history overflow-y-auto flex flex-col gap-6'>
                                        {chatItem}
                                    {/* <div className='p-2 px-4 text-sm text-brand-purple self-center rounded-lg bg-gray-500'>Today</div> */}
                                   {/* <div className='flex flex-col gap-6'>
                                    {chatItem}
                                   </div> */}
                                    </div>
                                    


                                    {/* chat imput field */}
                                    <div className='flex justify-between pt-4 lg:pr-4'>
                                        <div className='relative flex w-5/6'>
                                            <i className='absolute self-center right-4 text-sm'><FaPaperPlane /></i>
                                            <input placeholder='Type your message' className='rounded-3xl post-box w-full py-3 px-4 outline-none text-typography-grey text-sm tracking-wide focus:text-white border border-transparent delay-75 duration-150 focus:border-brand-purple' />
                                        </div>
                                        <div className='bg-black-v3 rounded-full post-box flex items-center px-4 py-2'>
                                            <i className=''>
                                                <FaPhotoVideo />
                                            </i>
                                        </div>
                                        <div className='bg-black-v3 rounded-full post-box flex items-center px-4 py-2'>
                                            <i className=''>
                                                <FaSmile />
                                            </i>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    );
}

export default ChatPage;