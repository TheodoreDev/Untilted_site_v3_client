import React from "react";
import NavBar from "../navBar/navBar";
import HomeContent from "./homeContent/homeContent";

function Home() {
  const username = ''

  return(
    <>
      <NavBar now="home"></NavBar>
      <HomeContent></HomeContent>
    </>
  )
}

export default Home