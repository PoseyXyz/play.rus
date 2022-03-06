import React, { useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { GameContext } from '../Context';

function Sidebar(props) {
    const {sideBarOpen, setSideBarOpen} = useContext(GameContext)
    return (
        <div className="bg-black">
            <button className="text-white text-lg"><i><FaTimesCircle/></i></button>
        </div>
    );
}

export default Sidebar;