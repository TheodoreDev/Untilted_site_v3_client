import React from "react";
import './navBarLinks.css'

function NavBarLink(props) {
    const {name, img, other_class, link} = props

    return(
      <li className={"navbar_li " + other_class}>
          <a href={link}><i className={img} ></i><span className="link_name">{name}</span></a>
          <ul className="sub-menu blank">
              <li><a href={link} className="link_name">{name}</a></li>
          </ul>
      </li>
    )
}

export default NavBarLink