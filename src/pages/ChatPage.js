import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa'
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
        ]
    )
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-3 gap-6'>
                {/* friends box */}
                <div className='col-span-1 bg-black-v3 h-screen rounded-xl lg:p-8'>
                    <div className='relative flex'>
                        <i className='absolute self-center left-4'><FaSearch/></i>
                        <input placeholder='Search' className='rounded-3xl post-box w-full p-3 px-10 outline-none text-typography-grey text-sm tracking-wide focus:text-white border border-transparent delay-75 duration-150 focus:border-brand-purple'/>
                    </div>
                </div>


                {/* chat history box */}
                <div className='col-span-2 bg-black-v3 rounded-xl lg:p-8'>

                </div>
            </div>
        </div>
    );
}

export default ChatPage;