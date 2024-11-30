import React, { useEffect, useState } from "react";
import './accountPage.css'
import '../../variables.css'
import './responsive.css'
import ProfilPhoto from './profilPhoto/profilPhoto'
import Preferences from './preferences/preferences'
import DangerZone from './dangerZone/dangerZone'
import axios from 'axios'
import {loadState, saveState, clearState} from '../../helper/sessionStorage'
import {useNavigate} from 'react-router-dom'

function Account() {
  const sessionkey1 = "user"
  const pagekey1 = "page"
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

  const act_page = loadState(pagekey1, [0])
  console.log(act_page)

  if(!user.username) {
    return(
      <>
      <div className="not-logged">
          <p>You are not logged</p>
      </div>
      </>
    )
  } else {
    return(
      <>
      <div className={"container-account " + `${classes.theme_classe}-theme`}>
        <div className="QUIT">
          <a href={"/" + act_page.page} className="QUIT_button"><i class='bx bx-left-arrow-circle'></i></a>
        </div>
        <div className="card">
          <h1 className="UserName" name="username">{user.username}</h1>
          <ProfilPhoto></ProfilPhoto>
          <hr></hr>
            <div className="one_pref">
              <div className="now">
                  <h3>Theme :</h3>
                  <p>{classes.theme_classe}</p>
              </div>
              <label className="switch-theme">
                <input type="checkbox" name="theme" className="theme-switcher" onClick={switchTheme} checked={classes.check_theme}/>
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
}

export default Account