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
    theme_classe: ' light-theme',
    check_theme : false,
    theme: 'light'
  })

  if (user.theme === 1) {
    classes.theme_classe = 'dark-theme '
    classes.check_theme = false
    classes.theme = 'dark'
  }

  function switchTheme(){
    if(classes.theme_classe === 'light-theme') {
      setClasses({
        theme_classe: 'dark-theme',
        check_theme: true,
        theme: 'dark'
      })
    } else {
      setClasses({
        theme_classe: 'light-theme',
        check_theme: false,
        theme: 'light'
      })
    }
  }

  return(
    <>
    <div className={"container-account " + classes.theme_classe}>
      <div className="QUIT">
        <a href="/home" className="QUIT_button"><i class='bx bx-left-arrow-circle'></i></a>
      </div>
      <div className="card">
        <ProfilPhoto></ProfilPhoto>
        <hr></hr>
          <div class="one_pref">
            <div class="now">
                <h3>Theme :</h3>
                <p>{classes.theme}</p>
            </div>
            <label class="switch-theme">
              <input type="checkbox" name="theme" class="theme-switcher" onClick={switchTheme} checked={classes.check_theme}/>
              <span></span>
            </label>
          </div>
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