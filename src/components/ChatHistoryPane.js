import React from 'react';
import { FaPaperPlane, FaPhotoVideo, FaSmile } from 'react-icons/fa'
import {BiDotsVerticalRounded} from 'react-icons/bi'

function ChatHistoryPane({currentChat, chats}) {
    return (
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

                                        <div className={`flex flex-col lg:flex-row gap-4 p-3 rounded-md`}>

                                            <img src={imageUrl} className='rounded-full w-10 h-10' alt='chat avatar' />
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
    );
}

export default ChatHistoryPane;