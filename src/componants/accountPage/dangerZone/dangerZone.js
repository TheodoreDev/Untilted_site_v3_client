import React, {useEffect, useState} from "react";
import './dangerZone.css'
import { loadState } from "../../../helper/sessionStorage";

function DangerZone() {
    const sessionkey1 = "user"
    const user = loadState(sessionkey1, [0])

    const [classes, setClasses] = useState({
      button_delete : "active",
      form_delete : " "
    })

    function deleteAccountShow() {
      if(classes.button_delete === "active") {
        setClasses({
          button_delete: " ",
          form_delete: "active"
        })
      } else {
        setClasses({
          button_delete: "active",
          form_delete: " "
        })
      }
    }

    return(
        <>
            <div className="delete-account">
                <h3>⚠️ Delete your account</h3>
                <button className={"button_delete " + classes.button_delete} onClick={deleteAccountShow}>DELETE</button>
                <form className={classes.form_delete}>
                    <img src="/Ressources/img/x-circle.svg" className="cancel-delete" onClick={deleteAccountShow}/>
                    <div className="data-to-delete">
                        <input type="password" name="password" placeholder="password" className="delete-input" required></input>
                        <p>Please type {user.username + "/" + user.email}</p>
                        <input type="text" name="key_sentense" className="delete-input sentence" required></input>
                    </div>
                    <button type="submit" className="confirm-delete"><img src="/Ressources/img/trash.svg"></img></button>
                </form>
            </div>
        </>
    )
}

export default DangerZone