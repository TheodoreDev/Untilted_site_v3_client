import React, { useEffect, useState } from "react";
import {loadState, saveState, supState} from '../../../helper/sessionStorage'
import './preferences.css'
import './preference.css'
import '../../../variables.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Preferences() {
  const [classes, setClasses] = useState({
    button_save : "active",
    input_save : " "
  })
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [new_password, setNewPassword] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')
  const [password, setPassword] = useState('')

  const sessionkey1 = "user"
  const user = loadState(sessionkey1, [0])
  const navigate = useNavigate()
  useEffect(() => {setUsername(user.username)})

  function saveChanges() {
    if(classes.button_save === "active") {
      setClasses({
        button_save: " ",
        input_save: "active"
      })
    } else {
      setClasses({
        button_save: "active",
        input_save: " "
      })
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/update-preferences', {username, newUsername, email, birthday, new_password, password})
    .then(res => {
      if (res === "Updating failed") {
        navigate("/home")
      } else {
        navigate("/account")
        console.log(res)
        saveState(sessionkey1, res.data)
      }
    })
    .catch(err => console.log(err))
  }

  return(
    <>
      <div className="preferences">
        <form onSubmit={handleSubmit}>
          <div className="one_pref">
            <div className="now">
                <h3>Username :</h3>
                <p>{user.username}</p>
            </div>
            <input type='username' name='username' className="all-input" placeholder={user.username}
            onChange={e => setNewUsername(e.target.value)} />
          </div>
          <div className="one_pref">
            <div className="now">
                <h3>Email :</h3>
                <p>{user.email}</p>
            </div>
            <input type='email' name='email' className="all-input" placeholder={user.email}
            onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="one_pref">
            <div className="now">
                <h3>Birthday :</h3>
                <p>{user.birthday}</p>
            </div>
            <input type='date' name='birthday' className="all-input" placeholder={user.birthday}
            onChange={e => setBirthday(e.target.value)} />
          </div>
          <div className="one_pref">
            <div className="now">
                <h3>Password :</h3>
            </div>
            <input type='password' name='new-password' className="all-input" placeholder="new password"
            onChange={e => setNewPassword(e.target.value)} />
          </div>
          <div className="button_change">
            <button type="button" className={"apply-preferences " + classes.button_save} onClick={saveChanges}>Apply Changes</button>
            <div className={"confirm-preferences " + classes.input_save}>
              <img src="/Ressources/img/arrow-back.svg" className="cancel-change" onClick={saveChanges}/>
              <input type="password" name="password" class="all-input" placeholder="password"
              onChange={e => setPassword(e.target.value)} required />
              <button type="submit" className="check-button">
                <img src="/Ressources/img/check-circle.svg" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
  
export default Preferences