import React, {useEffect, useState} from "react";
import './dangerZone.css'
import axios from 'axios'
import { loadState, supState } from "../../../helper/sessionStorage";
import { useNavigate } from 'react-router-dom';

function DangerZone() {
    const sessionkey1 = "user"
    const user = loadState(sessionkey1, [0])
    const navigate = useNavigate()

    const [classes, setClasses] = useState({
      button_delete : "active",
      form_delete : " "
    })
    const [username, setUsername] = useState(user.username)
    const [password_to_delete, setPassword] = useState('')
    const [verify_char, setVerifyChar] = useState('')

    function deleteAccountShow() {
      if(classes.button_delete === "active") {
        setClasses({
          button_delete: " ",
          form_delete: "active"
        })
      } else {
        setClasses({
          button_delete: "active",
          form_delete: " "
        })
      }
    }

    function deleteAccount(event) {
      event.preventDefault()
      axios.post('http://localhost:5000/delete-user', {username, password_to_delete, verify_char})
      .then(res => {
        if(res.data === "Delete user") {
          supState()
          navigate('/')
          alert("User delete")
        } else {
          navigate('/account')
        }
      })
      .catch(error => console.log(error))
    }

    return(
        <>
            <div className="delete-account">
                <h3>⚠️ Delete your account</h3>
                <button className={"button_delete " + classes.button_delete} onClick={deleteAccountShow}>DELETE</button>
                <form className={classes.form_delete} onSubmit={deleteAccount}>
                    <img src="/Ressources/img/x-circle.svg" className="cancel-delete" onClick={deleteAccountShow}/>
                    <div className="data-to-delete">
                        <input type="password" name="password" placeholder="password" className="delete-input" 
                        onChange={e => setPassword(e.target.value)} required></input>
                        <p>Please type {user.username + "/" + user.email}</p>
                        <input type="text" name="key_sentense" className="delete-input sentence" 
                        onChange={e => setVerifyChar(e.target.value)} required></input>
                    </div>
                    <button type="submit" className="confirm-delete"><img src="/Ressources/img/trash.svg"></img></button>
                </form>
            </div>
        </>
    )
}

export default DangerZone