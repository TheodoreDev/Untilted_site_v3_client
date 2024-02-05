import React, { useEffect, useState } from "react";
import {loadState, saveState, supState} from '../../../helper/sessionStorage'
import './profilPhoto.css'
import '../../../variables.css'

function ProfilPhoto() {
  const sessionkey1 = "user"
  const user = loadState(sessionkey1, [0])

    return(
      <>
        <div className="profile">
            <button className="change_profil_img">
                <div className="pp">
                    <p className="pp-status">{user.pp_status}</p>
                    <img src="/Ressources/img/profil-default.png" alt="profile" className="pp_img"/>
                </div>
                <div className="change_photo_overlay">
                    <i className='bx bxs-camera-plus'></i>
                </div>
            </button>
        </div>
      </>
    )
  }
  
  export default ProfilPhoto