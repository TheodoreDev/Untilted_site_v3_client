import React, { useEffect, useState } from "react";
import {loadState, saveState, supState} from '../../../../helper/sessionStorage'

function Preferences(props) {
    const {title, data, type} = props
    const sessionkey1 = "user"
    const user = loadState(sessionkey1, [0])

    return(
      <>
        <div class="one_pref">
            <div class="now">
                <h3>{title} :</h3>
                <p>{}</p>
            </div>
            <input type={type} name={data} class="all-input" value={"..."} />
        </div>
      </>
    )
  }
  
  export default Preferences