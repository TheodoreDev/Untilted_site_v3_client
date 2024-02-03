import React, { useEffect, useState } from "react";
import {loadState, saveState, supState} from '../../../helper/sessionStorage'
import './profilPhoto.css'

function ProfilPhoto() {
  const sessionkey1 = "user"
  const user = loadState(sessionkey1, [0])

    return(
      <>
        <h1 class="UserName">{user.username}</h1>
          <div class="profile">
              <button class="change_profil_img">
                  <div class="pp">
                      <p class="pp-status">{user.pp_status}</p>
                      <img src="/Ressources/img/profil-default.png" alt="profile" class="pp_img"/>
                  </div>
                  <div class="change_photo_overlay">
                      <i class='bx bxs-camera-plus'></i>
                  </div>
              </button>
          </div>
      </>
    )
  }
  
  export default ProfilPhoto