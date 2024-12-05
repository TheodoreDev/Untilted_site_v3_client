import React, { useState } from 'react';
import './loginForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {loadState, addState, clearState} from '../../../helper/sessionStorage'

function Login() {
  const sessionkey1 = "user"
  const pagekey1 = "page"
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/login', {username, password})
    .then(res => {
      if (res === "Login Failed") {
        navigate("/")
      } else {
        navigate("/home")
        clearState()
        addState(sessionkey1, res.data)
        addState(pagekey1, {page: "home"})
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <form className="form" id="b-form" onSubmit={handleSubmit} name='login'>
        <h2 className="form_title title">Sign in to Website</h2>
        <input className="form__input" id="username" type="username" placeholder="Username" name = "username" maxLength="25"
        onChange={e => setUsername(e.target.value)} required/>
        <input className="form__input" id="password" type="password" placeholder="Password" name = "password" maxLength="25" 
        onChange={e => setPassword(e.target.value)} required/>
        <a className="form__link">Forgot your password?</a>
        <button className="form__button button" name = "signin">Log In</button>
    </form>
  );
}

export default Login