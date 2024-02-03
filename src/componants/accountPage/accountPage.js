import React, { useEffect, useState } from "react";
import './accountPage.css'
import '../../variables.css'
import ProfilPhoto from './profilPhoto/profilPhoto'
import Preferences from './preferences/preferences'
import DangerZone from './dangerZone/dangerZone'
import axios from 'axios'
import {loadState, saveState, supState} from '../../helper/sessionStorage'

function Account() {
  const sessionkey1 = "user"

  const user = loadState(sessionkey1, [0])
  const [classes, setClasses] = useState({
    theme: ' light-theme'
  })

  if (user.theme === 1) {
    classes.theme = 'dark-theme '
  }
  function handle_theme() {
    if (user.theme === 1) {
      setClasses({
        theme: ' dark-theme'
      })
    } else {
      setClasses({
        theme : ' light-theme'
      })
    }
  }

  return(
    <>
    <div className={"container-account" + classes.theme}>
      <div className="QUIT">
        <a href="/home" className="QUIT_button"><i class='bx bx-left-arrow-circle'></i></a>
      </div>
      <div className="card">
        <ProfilPhoto></ProfilPhoto>
        <hr></hr>
        <Preferences></Preferences>
        <hr></hr>
        <DangerZone></DangerZone>
      </div>
    </div>
    </>
  )
}

export default Account