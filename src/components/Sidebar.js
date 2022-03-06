import React, { useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';


function Sidebar({setSideBarOpen, sideBarOpen}) {
    
    return (
        <div className="bg-black">
            <button className="text-white text-lg" onClick={setSideBarOpen(false)}><i><FaTimesCircle/></i></button>
        </div>
    );
}

export default Sidebar;