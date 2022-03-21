import React from 'react';

function FriendsBar(props) {
    return (
        <aside className="bg-black-v1 hidden md:block col-span-1 sticky top-24 friendsbar box-border rounded-r-lg">
            <div className="flex flex-col gap-10 py-8">
                <div className="friend-icon"><div className="status-dot bg-brand-green"></div><div className="xp"><p className="text-white">10</p></div><img src={require('../images/friends/one.png')} className="avatar" /></div>
                <div className="flex justify-center items-center hover:transform hover:scale-75 duration-300 cursor-pointer relative"><div className="absolute rounded-full p-2 text-xs mr-8 mb-10 bg-red-500"></div><div className="bg-black-v3 absolute rounded-full p-1 px-2 text-xs ml-10 mt-10"><p className="text-white">10</p></div><img src={require('../images/friends/two.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-l-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center hover:transform hover:scale-75 duration-300 cursor-pointer relative"><div className="absolute rounded-full p-2 text-xs mr-8 mb-10 bg-brand-green"></div><div className="bg-black-v3 absolute rounded-full p-1 px-2 text-xs ml-10 mt-10"><p className="text-white">10</p></div><img src={require('../images/friends/three.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-l-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center hover:transform hover:scale-75 duration-300 cursor-pointer relative"><div className="absolute rounded-full p-2 text-xs mr-8 mb-10 bg-brand-green"></div><div className="bg-black-v3 absolute rounded-full p-1 px-2 text-xs ml-10 mt-10"><p className="text-white">10</p></div><img src={require('../images/friends/four.jpg')} className="w-2/5  md:w-1/3 border-4 border-t-0 border-l-0 border-brand-green rounded-full p-1" /></div>
                <div className="flex justify-center items-center hover:transform hover:scale-75 duration-300 cursor-pointer relative"><div className="absolute rounded-full p-2 text-xs mr-8 mb-10 bg-red-500"></div><div className="bg-black-v3 absolute rounded-full p-1 px-2 text-xs ml-10 mt-10"><p className="text-white">10</p></div><img src={require('../images/friends/five.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-l-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center hover:transform hover:scale-75 duration-300 cursor-pointer relative"><div className="absolute rounded-full p-2 text-xs mr-8 mb-10 bg-brand-green"></div><div className="bg-black-v3 absolute rounded-full p-1 px-2 text-xs ml-10 mt-10"><p className="text-white">10</p></div><img src={require('../images/friends/six.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-l-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center hover:transform hover:scale-75 duration-300 cursor-pointer relative"><div className="absolute rounded-full p-2 text-xs mr-8 mb-10 bg-brand-green"></div><div className="bg-black-v3 absolute rounded-full p-1 px-2 text-xs ml-10 mt-10"><p className="text-white">10</p></div><img src={require('../images/friends/seven.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-l-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center hover:transform hover:scale-75 duration-300 cursor-pointer relative"><div className="absolute rounded-full p-2 text-xs mr-8 mb-10 bg-brand-green"></div><div className="bg-black-v3 absolute rounded-full p-1 px-2 text-xs ml-10 mt-10"><p className="text-white">10</p></div><img src={require('../images/friends/eight.jpg')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-l-0 border-brand-purple rounded-full p-1" /></div>
            
            </div>
        </aside>
    );
}

export default FriendsBar;