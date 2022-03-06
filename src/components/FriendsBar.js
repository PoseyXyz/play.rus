import React from 'react';

function FriendsBar(props) {
    return (
        <aside className="bg-black-v1 hidden md:block col-span-1 sticky top-24 friendsbar box-border rounded-r-lg">
            <div className="flex flex-col gap-10 py-8">
                <div className="flex justify-center items-center"><img src={require('../images/friends/one.png')} className="w-2/5 hover:transform hover:scale-75 duration-300 cursor-pointer md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/friends/two.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/friends/three.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/friends/four.jpg')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/friends/five.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/friends/six.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/friends/seven.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/friends/eight.jpg')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
            
            </div>
        </aside>
    );
}

export default FriendsBar;