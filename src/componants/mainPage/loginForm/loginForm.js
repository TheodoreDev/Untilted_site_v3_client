import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './loginForm.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <form class="form" id="b-form">
            <h2 class="form_title title">Sign in to Website</h2>
            <input class="form__input" id="username" type="username" placeholder="Username" name = "username" maxlength="25" required/>
            <input class="form__input" id="password" type="password" placeholder="Password" name = "password" maxlength="25" required/>
            <a class="form__link">Forgot your password?</a>
            <button class="form__button button" name = "signin">Log In</button>
        </form>
    );
  }
}

export default Login;