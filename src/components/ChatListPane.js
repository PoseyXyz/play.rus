import React from 'react';
import { FaSearch, FaUserFriends } from 'react-icons/fa'

function ChatListPane({currentChat, setCurrentChat, chats}) {
    return (
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
    );
}

export default ChatListPane;