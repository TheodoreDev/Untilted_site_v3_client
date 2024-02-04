import React, { useEffect, useState } from "react";
import {loadState, saveState, supState} from '../../../../helper/sessionStorage'
import './preference.css'

function Preference(props) {
  const {title, data, type} = props
  const sessionkey1 = "user"
  const user = loadState(sessionkey1, [0])

  var data_out = ""
  var placeholder = ""
  switch(data){
    case "username" :
      data_out = user.username
      break
    case 'email' :
      data_out = user.email
      break
    case 'birthday' :
      data_out = user.birthday
      break
    case 'new-password' :
      data_out = " "
      placeholder = "new password"
      break
  }

  return(
    <>
      <div class="one_pref">
          <div class="now">
              <h3>{title} :</h3>
              <p>{data_out}</p>
          </div>
          {data === "new-password" &&
            <input type={type} name={data} class="all-input" placeholder={placeholder} />
          }
          {data !== "new-password" &&
            <input type={type} name={data} class="all-input" value={data_out} />
          }
      </div>
    </>
  )
}
  
export default Preference