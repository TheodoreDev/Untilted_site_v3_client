import React, { useState } from "react";
import '../navBarLinks/navBarLinks'

function NavBarLinkSubMenu(props) {
    const {name, img, other_class, subsMenus, link} = props
    const subMenus = subsMenus.split('-')
    
    const [state, setState] = useState({
        showMenu: " "
    })

    function toggleSubMenu() {
        if(state.showMenu === " ") {
            setState({
                showMenu: " showMenu"
            })
        } else {
            setState({
                showMenu: " "
            })
        }
    }
  
    return(
        <li className={"navbar_li " + other_class + state.showMenu}>
            <div className="icon-link">
                <a href={link}><i className={img}></i><span className="link_name">{name}</span></a>
                <i className='bx bx-chevron-down arrow' onClick={toggleSubMenu} ></i>
            </div>
            <ul className="sub-menu">
                <li><a className="link_name" href={link}>{name}</a></li>
                <li><a>{subMenus[0]}</a></li>
                <li><a>{subMenus[1]}</a></li>
            </ul>
        </li>
    )
}

export default NavBarLinkSubMenu