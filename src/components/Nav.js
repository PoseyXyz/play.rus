import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FaBars, FaBell, FaHamburger} from 'react-icons/fa'

function ChangeTitle() {
    const location = useLocation()
    switch (location.pathname) {
        case '/':
            return 'Explore';
        case '/alt':
            return 'Admin';
        default:
            return 'Dashboard';
    }

}

function Nav(props) {
    let title = ChangeTitle()

    return (
        <nav className="grid grid-cols-10 bg-black-v1 px-6 text-white py-3 gap-4 items-center">
            <div className="col-span-2 flex items-center justify-center"><img src={require('../images/logo.png')} className="w-2/5 md:w-1/4"/></div>
            <div className="col-span-5 md:col-span-7 px-4 pr-16 flex justify-center md:justify-between items-center border-r border-typography-grey">
                <h3 className="text-typography-grey text-xl font-normal">{title}</h3>
                <div className="md:flex gap-16 items-center hidden">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between gap-4">
                            <p className="font-light text-typography-grey">Next:</p>
                            <p className="font-semibold">850 XP</p>
                        </div>
                        <div className="w-40">
                            <span className="w-full h-2 rounded-lg bg-typography-grey block"><span className="rounded-lg w-3/5 h-2 block bg-brand-purple"></span></span>
                            
                        </div>
                    </div>
                    <div><i><FaBell/></i></div>
                    
                </div>
            </div>
            
            <div className="col-span-3 md:col-span-1 flex justify-center items-center gap-6"><img src={require('../images/profilehead.png')} className="w-2/5 md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1"/>
            <i className="block md:hidden text-xl cursor-pointer"><FaBars/></i>
            </div>
        </nav>
    );
}

export default Nav;