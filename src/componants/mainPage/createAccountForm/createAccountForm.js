import React, { useState } from 'react';
import './createAccountForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {loadState, addState} from '../../../helper/sessionStorage'

function CreateAccount() {
  const navigate = useNavigate()
  const sessionkey1 = "user"

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/register', {username, password, email})
    .then(res => {
      if (res === "Register Failed" || res === "This user already exist") {
        console.log(res)
      } else {
        addState(sessionkey1, res.data)
        navigate('/home')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <form className="form" id="a-form" onSubmit={handleSubmit}>
        <h2 className="form_title title">Create Account</h2>
        <input className="form__input" id="username" type="text" placeholder="Username" name ="username_register" maxLength="14" 
        onChange={e => setUsername(e.target.value)} required/>
        <input className="form__input" id="email" type="email" placeholder="Email" name="email"
        onChange={e => setEmail(e.target.value)} required/>
        <input className="form__input" id="password" type="password" placeholder="Password" name="password" minLength="8" maxLength="25"
        onChange={e => setPassword(e.target.value)} required/>
        <button className="form__button button" type='submit' name ="signup">SIGN UP</button>
    </form>
  );
}

export default CreateAccount