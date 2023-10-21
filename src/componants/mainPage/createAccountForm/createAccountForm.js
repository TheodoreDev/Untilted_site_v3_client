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
      <form class="form" id="a-form" onSubmit={this.handleSubmit}>
          <h2 class="form_title title">Create Account</h2>
          <input class="form__input" id="username" type="text" placeholder="Username" name ="username" maxlength="14" value={this.state.value} onChange={this.handleChange} required/>
          <input class="form__input" id="email" type="email" placeholder="Email" name="email" required/>
          <input class="form__input" id="password" type="password" placeholder="Password" name="password" minlength="8" maxlength="25" required/>
          <button class="form__button button" type='submit' name ="signup">SIGN UP</button>
      </form>
    );
  }
}

export default CreateAccount;