import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import FriendsBar from '../components/FriendsBar';
import MenuBar from '../components/MenuBar';
import Nav from '../components/Nav';

function Layout(props) {
    return (
        <div>
            <Nav/>
            <Link to="alt">ALT</Link>
            <Link to="xbox">XBOX</Link>
            <section>
                <MenuBar/>
                <Outlet/>
                <FriendsBar/>
            </section>
        </div>
    );
}

export default Layout;