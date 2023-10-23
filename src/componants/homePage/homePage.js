import React from "react";
import NavBar from "../navBar/navBar";
import HomeContent from "./homeContent/homeContent";
import './homePage.css'

function Home() {
  const username = ''

  return(
    <>
      <NavBar></NavBar>
      <HomeContent></HomeContent>
    </>
  )
}

export default Home