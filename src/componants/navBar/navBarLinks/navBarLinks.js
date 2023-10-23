import React from "react";
import './navBarLinks.css'

function NavBarLink(props) {
    const {name, img, other_class} = props

    return(
      <li className={"navbar_li " + other_class}>
          <a><i className={img} ></i><span className="link_name">{name}</span></a>
          <ul className="sub-menu blank">
              <li><a href="#" className="link_name">{name}</a></li>
          </ul>
      </li>
    )
}

export default NavBarLink