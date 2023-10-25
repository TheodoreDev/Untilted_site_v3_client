import React from "react";
import './navBarLinks.css'
import { Link, useNavigate } from "react-router-dom";

function NavBarLink(props) {
    const {name, img, other_class, link, user} = props

    return(
      <li className={"navbar_li " + other_class}>
          <a href={link}><i className={img} ></i><span className="link_name">{name}</span></a>
          <ul className="sub-menu blank">
              <li><Link className="link_name" to="/forum" state={{user: user}}>{name}</Link></li>
          </ul>
      </li>
    )
}

export default NavBarLink