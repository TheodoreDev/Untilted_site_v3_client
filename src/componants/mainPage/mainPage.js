import React, {useState} from 'react';
import CreateAccount from './createAccountForm/createAccountForm'
import Login from './loginForm/loginForm'
import './css/mainPage.css'
import {useNavigate} from 'react-router-dom'
import { loadState } from '../../helper/sessionStorage';

function MainPage () {

  const sessionkey1 = "user"
  const user = loadState(sessionkey1, [0])
  const navigate = useNavigate()

  const [classes, setClasses] = useState({
    switchCtn: 'switch',
    switchCircle0: 'switch__circle',
    switchCircle1: 'switch__circle switch__circle--t',
    switchC1: 'switch__container',
    switchC2: 'switch__container is-hidden',
    aContainer: 'container a-container',
    bContainer: 'container b-container',
  });


  function switchLogin() {
    setClasses({
        switchCtn: "switch is-txr",
        switchCircle0: "switch__circle is-txr",
        switchCircle1: "switch__circle switch__circle--t is-txr",
        switchC1: "switch__container is-hidden",
        switchC2: "switch__container",
        aContainer: "container a-container is-txl",
        bContainer: "container b-container is-txl is-z200",
    })
  }

  function switchSignin() {
    setClasses({
        switchCtn: 'switch',
        switchCircle0: 'switch__circle',
        switchCircle1: 'switch__circle switch__circle--t',
        switchC1: 'switch__container',
        switchC2: 'switch__container is-hidden',
        aContainer: 'container a-container',
        bContainer: 'container b-container'
    })
  }

  if(user.username){
    navigate('/home')
  }

  return (
      <div className="main">
          <div className={classes.aContainer} id="a-container">
              <CreateAccount></CreateAccount>
          </div>
          <div className={classes.bContainer} id="b-container">
              <Login></Login>
          </div>
          <div className={classes.switchCtn} id="switch-cnt">
              <div className={classes.switchCircle0}></div>
              <div className={classes.switchCircle1}></div>
              <div className={classes.switchC1} id="switch-c1">
                  <h2 className="switch__title title">Welcome Back !</h2>
                  <p className="switch__description description">To keep connected with us please login with your personal info</p>
                  <button className="switch__button button switch-btn" onClick={switchLogin}>GO TO LOG IN</button>
              </div>
              <div className={classes.switchC2} id="switch-c2">
                  <h2 className="switch__title title">Hello Friend !</h2>
                  <p className="switch__description description">Enter your personal details and start journey with us</p>
                  <button className="switch__button button switch-btn" onClick={switchSignin}>GO TO SIGN UP</button>
              </div>
          </div>
      </div>
  );
}

export default MainPage;