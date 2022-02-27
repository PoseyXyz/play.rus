import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ChangeTitle(){
    const location = useLocation()
    switch(location.pathname){
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
        <nav className="grid grid-cols-10 bg-light-black px-6 text-white py-4 items-center">
             <div className="col-span-2"><h1>game</h1></div>
             <div className="col-span-7"><h3>{title}</h3></div>
             <div className="col-span-1"><span>Experience points</span></div>
        </nav>
    );
}

export default Nav;