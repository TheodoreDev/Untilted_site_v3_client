import React, { useEffect, useState } from "react";
import '../../variables.css'
import RspguiContent from "./rspguiContent/rspguiContent";
import {addState, removeState} from "../../helper/sessionStorage"

function Rspgui() {
  const pagekey1 = "page"

  removeState(pagekey1)
  addState(pagekey1, {page: "home/rspgui"})

  return(
    <>
      <RspguiContent></RspguiContent>
    </>
  )
}

export default Rspgui