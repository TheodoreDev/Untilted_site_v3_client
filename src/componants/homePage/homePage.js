import React, { useEffect, useState } from "react";
import '../../variables.css'
import HomeContent from "./homeContent/homeContent";
import {addState, removeState} from "../../helper/sessionStorage"

function Home() {
  const pagekey1 = "page"

  removeState(pagekey1)
  addState(pagekey1, {page: "home"})

  return(
    <>
      <HomeContent></HomeContent>
    </>
  )
}

export default Home