import React from "react";
import './navBar.css';
import './responsive.css';
import NavBarLink from './navBarLinks/navBarLinks'
import NavBarLinkSubMenu from './navBarLinksSubMenu/navBarLinksSubMenu'
import { Outlet, useLocation } from "react-router-dom";

function NavBar(props) {
    const {now} = props

    const location = useLocation()
    const user = location.state.user

    var type_user = "User"

    if (user.admin == 1) {
        type_user = "Admin"
    }
    if (now === "home") {
        var nowinhome = "nowin"
    } else if (now === "forum") {
        var nowinforum = "nowin"
    }

    return(
        <>
            <div className="sidebar">
                <div className="logo-details">
                    <i className='bx bxs-file-txt'></i>
                    <span className="logo_name">Untilted.txt</span>
                </div>
                <ul className="nav-links">
                    <NavBarLink 
                        name="Home" 
                        img="bx bxs-grid" 
                        other_class={nowinhome} 
                        link="/home" 
                        user={user}
                    ></NavBarLink>
                    <NavBarLink 
                        name="Forums" 
                        img="bx bxs-collection" 
                        other_class={nowinforum} 
                        link="/home/forum" 
                        user={user}
                    ></NavBarLink>
                    <NavBarLinkSubMenu 
                        name="Apps" 
                        img="bx bx-cart-download" 
                        subsMenus="Browse-Publish" 
                        link="/apps"
                    ></NavBarLinkSubMenu>
                    <NavBarLinkSubMenu 
                        name="Repport" 
                        img="bx bxs-megaphone" 
                        subsMenus="A bug-An good idea" 
                        link="/repports"
                    ></NavBarLinkSubMenu>

                    <li>
                        <div className="profil">
                            <div className="profil-content">
                                <p className="pp-status">{user.pp_status}</p>
                                <a className="preferences">
                                    <img src="/Ressources/img/profil-default.png" alt="profile" className="pp_img"/>
                                    <img src="/Ressources/img/engrenage_parametre.png" alt="preferences" className="preferences_engrenage"/>
                                </a>
                            </div>
                            <div className="info">
                                <div className="profil-name">{user.username}</div>
                                <div className="type-user">
                                    <a href="/dashboard" className="dashboard">
                                        {type_user}
                                    </a>
                                </div>
                                <div className="theme-indicator">{user.theme}</div>
                            </div>
                            <div className="form">
                                <div className="button_disconnect"><img src="/Ressources/img/log-out.png" /></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default NavBar