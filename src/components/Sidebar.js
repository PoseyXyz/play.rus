import React, { useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { GameContext } from '../Context';


function Sidebar({}) {
    const {sideBarOpen, setSideBarOpen} = useContext(GameContext)
    return (
        <div className={`${sideBarOpen ? 'w-full':'w-0'} absolute h-screen bg-red-500 z-20`}>
            <button className="text-white text-lg" onClick={()=>setSideBarOpen(false)}><i><FaTimesCircle/></i></button>
           
        </div>
    );
}

export default Sidebar;