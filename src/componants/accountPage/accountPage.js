import React, { useEffect, useState } from "react";
import './accountPage.css'
import '../../variables.css'
import './responsive.css'
import ProfilPhoto from './profilPhoto/profilPhoto'
import Preferences from './preferences/preferences'
import DangerZone from './dangerZone/dangerZone'
import axios from 'axios'
import {loadState, saveState, supState} from '../../helper/sessionStorage'
import {useNavigate} from 'react-router-dom'

function Account() {
  const sessionkey1 = "user"
  const navigate = useNavigate()

  const user = loadState(sessionkey1, [0])
  const [classes, setClasses] = useState({
    theme_classe: 'light',
    check_theme : false,
    theme: 0
  })
  const [username, setUsername] = useState('')
  useEffect(() => {setUsername(user.username)})

  if (user.theme === 1) {
    classes.theme_classe = 'dark'
    classes.check_theme = true
    classes.theme = 1
  }

  function switchTheme(){
    if(classes.theme_classe === 'light') {
      axios.post('http://localhost:5000/change-theme', {classes, username})
      .then(res => {
        console.log(res.data)
        saveState(sessionkey1, res.data)
        navigate("/account")
        setClasses({
          theme_classe: 'dark',
          check_theme: true,
          theme: 1
        })
      })
    } else {
      axios.post('http://localhost:5000/change-theme', {classes, username})
      .then(res => {
        console.log(res.data)
        saveState(sessionkey1, res.data)
        navigate("/account")
        setClasses({
          theme_classe: 'light',
          check_theme: false,
          theme: 0
        })
      })
    }
  }

  return(
    <>
    <div className={"container-account " + `${classes.theme_classe}-theme`}>
      <div className="QUIT">
        <a href="/home" className="QUIT_button"><i class='bx bx-left-arrow-circle'></i></a>
      </div>
      <div className="card">
        <h1 class="UserName" name="username">{user.username}</h1>
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