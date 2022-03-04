import React from 'react';

function FriendsBar(props) {
    return (
        <aside className="bg-black-v1 hidden md:block col-span-1 sticky top-0 h-screen box-border rounded-r-lg">
            <div className="flex flex-col gap-10 py-8">
                <div className="flex justify-center items-center"><img src={require('../images/profilehead.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/profilehead.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/profilehead.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/profilehead.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/profilehead.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/profilehead.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/profilehead.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
                <div className="flex justify-center items-center"><img src={require('../images/profilehead.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" /></div>
            
            </div>
        </aside>
    );
}

export default FriendsBar;