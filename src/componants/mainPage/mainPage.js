import React from 'react';
import CreateAccount from './createAccountForm/createAccountForm'
import Login from './loginForm/loginForm'
import './css/mainPage.css'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        switchCtn: 'switch',
        switchCircle0: 'switch__circle',
        switchCircle1: 'switch__circle switch__circle--t',
        switchC1: 'switch__container',
        switchC2: 'switch__container is-hidden',
        aContainer: 'container a-container',
        bContainer: 'container b-container',
    };

    this.switchLogin = this.switchLogin.bind(this)
    this.switchSignin = this.switchSignin.bind(this)
  }

  switchLogin() {
    this.setState({
        switchCtn: this.state.switchCtn + " is-txr",
        switchCircle0: this.state.switchCircle0 + " is-txr",
        switchCircle1: this.state.switchCircle1 + " is-txr",
        switchC1: this.state.switchC1 + " is-hidden",
        switchC2: this.state.switchC2 = "switch__container",
        aContainer: this.state.aContainer + " is-txl",
        bContainer: this.state.bContainer + " is-txl is-z200",
    })
  }

  switchSignin() {
    this.setState({
        switchCtn: this.state.switchCtn = 'switch',
        switchCircle0: this.state.switchCircle0 = 'switch__circle',
        switchCircle1: this.state.switchCircle1 = 'switch__circle switch__circle--t',
        switchC1: this.state.switchC1 = 'switch__container',
        switchC2: this.state.switchC2 = 'switch__container is-hidden',
        aContainer: this.state.aContainer = 'container a-container',
        bContainer: this.state.bContainer = 'container b-container'
    })
  }

  render() {
    return (
        <div className="main">
            <div className={this.state.aContainer} id="a-container">
                <CreateAccount></CreateAccount>
            </div>
            <div className={this.state.bContainer} id="b-container">
                <Login></Login>
            </div>
            <div className={this.state.switchCtn} id="switch-cnt">
                <div className={this.state.switchCircle0}></div>
                <div className={this.state.switchCircle1}></div>
                <div className={this.state.switchC1} id="switch-c1">
                    <h2 className="switch__title title">Welcome Back !</h2>
                    <p className="switch__description description">To keep connected with us please login with your personal info</p>
                    <button className="switch__button button switch-btn" onClick={this.switchLogin}>GO TO LOG IN</button>
                </div>
                <div className={this.state.switchC2} id="switch-c2">
                    <h2 className="switch__title title">Hello Friend !</h2>
                    <p className="switch__description description">Enter your personal details and start journey with us</p>
                    <button className="switch__button button switch-btn" onClick={this.switchSignin}>GO TO SIGN UP</button>
                </div>
            </div>
        </div>
    );
  }
}

export default MainPage;