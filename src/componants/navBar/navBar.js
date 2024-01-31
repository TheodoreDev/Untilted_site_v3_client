import React, { useState } from "react";
import './navBar.css';
import './responsive.css';
import '../../variables.css'
import NavBarLink from './navBarLinks/navBarLinks'
import NavBarLinkSubMenu from './navBarLinksSubMenu/navBarLinksSubMenu'
import {loadState, saveState, supState} from '../../helper/sessionStorage'
import {Outlet, useNavigate} from 'react-router-dom'

function NavBar() {
    const sessionkey1 = "user"
    const navigate = useNavigate()
    /*const user = {
        username: "ThéodoreAdmin",
        pp_status: "true",
        admin: 1,
        theme: 0
    }*/
    const user = loadState(sessionkey1, [0])

    const [classes, setClasses] = useState({
        logout_popup_active: ' '
    })

    var type_user = "User"
    var theme = " light-theme"

    if (user.admin == 1) {
        type_user = "Admin"
    }
    if (user.theme == 1) {
        theme = " dark-theme"
    }

    function logoutPopup() {
        if (classes.logout_popup_active === " ") {
            setClasses({logout_popup_active: " active"})
        } else {
            setClasses({logout_popup_active: " "})
        }
    }

    function logout() {
        supState()
        navigate("/")
    }

    return(
        <>
        <div className="sidebar ligth-theme">
            <div className="logo-details">
                <i className='bx bxs-file-txt'></i>
                <span className="logo_name">Untilted.txt</span>
            </div>
            <ul className="nav-links">
                <NavBarLink 
                    name="Home" 
                    img="bx bxs-grid" 
                    link="/home" 
                ></NavBarLink>
                <NavBarLink 
                    name="Forums" 
                    img="bx bxs-collection"  
                    link="/home/forum" 
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
                            <div className="button_disconnect"><img src="/Ressources/img/log-out.png" onClick={logoutPopup}/></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="light-theme">
            <Outlet></Outlet>
        </div>
        <div className={"overlay" + theme + classes.logout_popup_active}></div>
        <div className={"deco_popup" + theme + classes.logout_popup_active}>
            <div className="content">
                <p>Do you want to be disconnected ?</p>
                <div className="buttons">
                    <form>
                        <button type="submit" onClick={logout}>Disconnect</button>
                    </form>
                    <div className="close_popup" onClick={logoutPopup}>Close</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar