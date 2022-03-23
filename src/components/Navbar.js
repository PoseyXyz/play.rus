import React, { useContext } from 'react';
import { FaBars, FaBell } from 'react-icons/fa'
import { GameContext } from '../Context';
import Search from '../pages/Search';

// function ChangeTitle() {
//     const location = useLocation()
//     switch (location.pathname) {
//         case '/recents':
//             return 'Recents';
//         case '/alt':
//             return 'Admin';
//         default:
//             return 'Explore';
//     }

// }

function Nav(props) {
    const { sideBarOpen, setSideBarOpen } = useContext(GameContext)
    // let title = ChangeTitle()
    
    return (
        <nav className="grid grid-cols-10 bg-black-v1 px-4 text-white py-3 gap-4 items-center fixed z-20 mb-4 top-0 box-border rounded-r-lg">
            <div className="col-span-2 flex items-center justify-center"><img src={require('../images/logo.png')} alt='logo' className="w-2/5 md:w-1/4" /></div>
            <div className="col-span-6 md:col-span-7 gap-4 md:pr-12 flex justify-center md:justify-between items-center">
                {/* <h3 className="text-typography-grey text-xl font-bold">{title}</h3> */}
                <Search />
                <div className="md:flex gap-12 items-center hidden">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between gap-4">
                            <p className="font-light text-typography-grey">Next:</p>
                            <p className="font-semibold">850 XP</p>
                        </div>
                        <div className="w-40">
                            <span className="w-full h-2 rounded-lg bg-typography-grey block"><span className="rounded-lg w-3/5 h-2 block bg-brand-purple"></span></span>
                        </div>
                    </div>
                    <div className="animate-bounce"><div className="absolute rounded-full p-1 text-xs mr-8 mb-10 bg-brand-green"></div><i className="text-xl"><FaBell /></i></div>

                </div>
            </div>

            <div className="col-span-2 md:col-span-1 flex justify-center items-center gap-6"><img src={require('../images/profilehead.png')} alt='profile head' className="w-2/5 hidden sm:block md:w-1/3 border-4 border-t-0 border-r-0 border-brand-purple rounded-full p-1" />
                <button onClick={() => setSideBarOpen(!sideBarOpen)} className="block md:hidden text-xl cursor-pointer"><FaBars /></button>
            </div>

        </nav>
    );
}

export default Nav;