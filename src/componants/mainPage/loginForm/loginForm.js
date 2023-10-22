import React from 'react';
import './loginForm.css'
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({username: event.target.username, password: event.target.password});
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('http://localhost:5000/login')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
        <form className="form" id="b-form" onSubmit={this.handleSubmit}>
            <h2 className="form_title title">Sign in to Website</h2>
            <input className="form__input" id="username" type="username" placeholder="Username" name = "username" maxLength="25" value={this.state.username} onChange={this.handleChange} required/>
            <input className="form__input" id="password" type="password" placeholder="Password" name = "password" maxLength="25" value={this.state.password} onChange={this.handleChange} required/>
            <a className="form__link">Forgot your password?</a>
            <button className="form__button button" name = "signin">Log In</button>
        </form>
    );
  }
}

export default Login;