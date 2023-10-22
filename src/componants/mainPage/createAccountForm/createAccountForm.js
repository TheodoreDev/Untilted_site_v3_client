import React from 'react';
import './createAccountForm.css'

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" id="a-form" onSubmit={this.handleSubmit}>
          <h2 className="form_title title">Create Account</h2>
          <input className="form__input" id="username" type="text" placeholder="Username" name ="username" maxLength="14" value={this.state.value} onChange={this.handleChange} required/>
          <input className="form__input" id="email" type="email" placeholder="Email" name="email" required/>
          <input className="form__input" id="password" type="password" placeholder="Password" name="password" minLength="8" maxLength="25" required/>
          <button className="form__button button" type='submit' name ="signup">SIGN UP</button>
      </form>
    );
  }
}

export default CreateAccount;