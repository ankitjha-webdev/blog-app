// import React from 'react'
import './sidebar.css'
import profile from './profile.jpg'
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className='sidebarImg' src={profile} alt="" />
                <p className="sidebarText">
                     Hi 👋 , I'm Ankit Kumar
                    A student of Computer Science! I am always ready to have new experiences, meet new people and learn new things and colloratote with them. I find the idea of creating value for people and impacting the world through my work gratifying.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <a href="/">Web Development</a>
                    </li>
                    <li className="sidebarListItem">
                        <a href="/">Programming</a>
                    </li>
                    <li className="sidebarListItem">
                        <a href="/">Design</a>
                    </li>
                    <li className="sidebarListItem">
                        <a href="/">Photography</a>
                    </li>

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Social Media</span>
                <div className="sidebarSocial">
                    <a href="/">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="sidebarIcon fab fa-instagram"></i>
                    </a>
                    <a href="/">
                        <i className="sidebarIcon fab fa-youtube"></i>
                    </a>
                    <a href="/">
                        <i className="sidebarIcon fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
