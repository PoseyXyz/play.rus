import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import FriendsBar from '../components/FriendsBar';
import MenuBar from '../components/MenuBar';
import Nav from '../components/Nav';

function Layout(props) {
    return (
        <>
           <header> <Nav/></header>
            <section>
                <MenuBar/>
                <Outlet/>
                <FriendsBar/>
            </section>
        </>
    );
}

export default Layout;