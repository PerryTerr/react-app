import React, {useState} from 'react';
import { icons } from 'react-icons/lib';
import { link } from 'react-router-dom';
import Sidebar from './Sidebar';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


function Navbar() {
    const[Sidebar,setSidebar]= useState(false)

    const showSidebar= () => setSidebar(!Sidebar)
    return (
        <>
        <div className="Navbar">
            <link to="#" className="menu-bars">
                <FaIcons  onClick={showSidebar} />
            </link>    
        </div>
        <nav className={Sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle"></li>
                <link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose/>
                </link>
                
            </ul>
        </nav>
        </>
    )
}

export default Navbar
