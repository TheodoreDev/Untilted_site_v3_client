import React, { useEffect, useState } from "react";
import Preference from "./preference/preference";
import './preferences.css'
import '../../../variables.css'

function Preferences() {
  const [classes, setClasses] = useState({
    button_save : "active",
    input_save : " "
  })

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

  return(
    <>
      <div className="preferences">
        <form>
          <Preference title="Username" data="username" type="text"></Preference>
          <Preference title="Email" data="email" type="email"></Preference>
          <Preference title="Birthday" data="birthday" type="date"></Preference>
          <Preference title="Password" data="new-password" type="password"></Preference>
          <div className="button_change">
            <button type="button" className={"apply-preferences " + classes.button_save} onClick={saveChanges}>Apply Changes</button>
            <div className={"confirm-preferences " + classes.input_save}>
              <img src="/Ressources/img/arrow-back.svg" className="cancel-change" onClick={saveChanges}/>
              <input type="password" name="password" class="all-input" placeholder="password" required />
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