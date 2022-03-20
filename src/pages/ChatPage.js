import React, { useState } from 'react';
import { FaSearch, FaUserFriends, FaHamburger } from 'react-icons/fa'
import image1 from '../images/friends/one.png'
import image2 from '../images/friends/two.png'
import image3 from '../images/friends/three.png'

function ChatPage(props) {
    const [chats, setChats] = useState(
        [
            {
                id: 1,
                name: 'Carlos',
                online: true,
                imageUrl: image1,
                chatHistory: [
                    {
                        id: 1,
                        user: false,
                        message: "Let's go play!"
                    },
                    {
                        id: 2,
                        user: true,
                        message: "Sorry man, busy now"
                    },
                    {
                        id: 3,
                        user: false,
                        message: "You're missing out. Text me when you're available!"
                    },
                    {
                        id: 4,
                        user: true,
                        message: "Let's play!"
                    },
                    {
                        id: 5,
                        user: false,
                        message: "That was a supernice game, man"
                    },
                    {
                        id: 6,
                        user: false,
                        message: "Loved the last kill lol"
                    }, {
                        id: 7,
                        user: true,
                        message: "Lol Ggs!"
                    }, {
                        id: 9,
                        user: false,
                        message: "I bet they all think you're a cheater"
                    },
                    {
                        id: 9,
                        user: true,
                        message: "Drop me a message when next you're available"
                    },
                    {
                        id: 10,
                        user: false,
                        message: "Yo, you available now? Let's go play Dota"
                    },
                ]
            },
            {
                id: 2,
                name: 'Artemis',
                online: true,
                imageUrl: image2,
                chatHistory: [
                    {
                        id: 1,
                        user: false,
                        message: "Let's go play!"
                    },
                    {
                        id: 2,
                        user: true,
                        message: "Sorry man, busy now"
                    },
                    {
                        id: 3,
                        user: false,
                        message: "You're missing out. Text me when you're available!"
                    },
                    {
                        id: 4,
                        user: true,
                        message: "Let's play!"
                    },
                    {
                        id: 5,
                        user: false,
                        message: "That was a supernice game, man"
                    },
                    {
                        id: 6,
                        user: false,
                        message: "Loved the last kill lol"
                    }, {
                        id: 7,
                        user: true,
                        message: "Lol Ggs!"
                    }, {
                        id: 9,
                        user: false,
                        message: "I bet they all think you're a cheater"
                    },
                    {
                        id: 9,
                        user: true,
                        message: "Drop me a message when next you're available"
                    },
                    {
                        id: 10,
                        user: false,
                        message: "Yo, you available now? Let's go play Dota"
                    },
                ]
            },
        ]
    )
    const [currentChat, setCurrentChat] = useState(0)
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-3 gap-6'>
                {/* friends box */}
                <div className='col-span-1 bg-black-v3 h-screen rounded-xl lg:p-6 flex flex-col gap-6'>

                    {/* search bar and friend icon */}
                    <div className='flex gap-4 justify-between'>
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
                    <div className='flex flex-col gap-4'>
                        {chats.map(chat => {
                            const { id, name, imageUrl, chatHistory } = chat
                            return (
                                <button className={`${currentChat === id ? 'border-brand-purple' : 'border-transparent'}  duration-300 border-l-4 flex flex-col lg:flex-row gap-4 post-box p-3 rounded-md`} onClick={() => setCurrentChat(id)} key={id}>

                                    <img src={imageUrl} className='rounded-full w-10 h-10' />
                                    <div className='flex flex-col gap-1'>
                                        <span className='flex gap-2 justify-between items-center'><span className='text-sm'>{name}</span><span className='flex text-xs text-typography-grey font-medium'>22:30</span></span>
                                        <p className='text-typography-grey text-sm text-left tracking-wide leading-6'>{chatHistory[chatHistory.length - 1].message}</p>
                                    </div>

                                </button>
                            )
                        })}
                    </div>
                </div>


                {/* chat history box */}
                <div className='col-span-2 bg-black-v3 rounded-xl lg:p-6 flex flex-col gap-6'>

                    {
                        chats.filter(chat => chat.id === currentChat).map(chat => {
                            const { id, name, online, imageUrl } = chat
                            return (
                                <>
                                    {/* header */}
                                    <div className='flex justify-between items-center'>

                                        <div className={`flex flex-col lg:flex-row gap-4 p-3 rounded-md`} key={id}>

                                            <img src={imageUrl} className='rounded-full w-10 h-10' />
                                            <div className='flex flex-col gap-1'>
                                                <span className='flex gap-2 justify-between items-center'><span className='text-sm'>{name}</span></span>
                                                <p className='text-typography-grey text-xs text-left tracking-wide leading-6'>{online ? 'Online' : 'Offline'}</p>
                                            </div>

                                        </div>

                                        <div className='bg-black-v3 rounded-full post-box flex items-center px-4 py-3'>
                                            <i className='text-white'>
                                                <FaHamburger />
                                            </i>
                                        </div>


                                    </div>

                                    {/* chat */}
                                    <div>

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