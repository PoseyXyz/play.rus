import React from 'react';
import { Link } from 'react-router-dom';

function FriendsBar(props) {
    return (
        <aside className="bg-black-v1 hidden md:block col-span-1 sticky top-24 friendsbar box-border rounded-r-lg overflow-y-auto">
            <div className="flex flex-col gap-10 py-8">
                <Link to='/chat' className="friend-icon"><div className="status-dot bg-brand-green"></div><div className="xp"><p className="text-white">10</p></div><img src={require('../images/friends/one.webp')} alt="friend_profile_avatar" className="avatar border-brand-green" /></Link>
                <Link to='/chat' className="friend-icon"><div className="status-dot bg-red-500"></div><div className="xp"><p className="text-white">8</p></div><img src={require('../images/friends/two.webp')} alt="friend_profile_avatar" className="border-brand-purple avatar" /></Link>
                <Link to='/chat' className="friend-icon"><div className="status-dot bg-brand-green"></div><div className="xp"><p className="text-white">10</p></div><img src={require('../images/friends/three.webp')} alt="friend_profile_avatar" className="border-red-500 avatar" /></Link>
                <Link to='/chat'  className="friend-icon"><div className="status-dot bg-brand-green"></div><div className="xp"><p className="text-white">12</p></div><img src={require('../images/friends/four.jpg')} alt="friend_profile_avatar" className="border-blue-500 avatar" /></Link>
                <Link to='/chat' className="friend-icon"><div className="status-dot bg-red-500"></div><div className="xp"><p className="text-white">10</p></div><img src={require('../images/friends/five.png')} alt="friend_profile_avatar" className="border-orange-500 avatar" /></Link>
                <Link to='/chat' className="friend-icon"><div className="status-dot bg-brand-green"></div><div className="xp"><p className="text-white">11</p></div><img src={require('../images/friends/six.png')} alt="friend_profile_avatar" className="border-white avatar" /></Link>
                <Link to='/chat' className="friend-icon"><div className="status-dot bg-brand-green"></div><div className="xp"><p className="text-white">7</p></div><img src={require('../images/friends/seven.png')} alt="friend_profile_avatar" className="border-white avatar" /></Link>
                <Link to='/chat' className="friend-icon"><div className="status-dot bg-brand-green"></div><div className="xp"><p className="text-white">6</p></div><img src={require('../images/friends/eight.jpg')} alt="friend_profile_avatar" className="border-yellow-500 avatar" /></Link>
            </div>
        </aside>
    );
}

export default FriendsBar;