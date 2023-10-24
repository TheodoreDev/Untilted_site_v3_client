import React from "react";
import NavBar from "../navBar/navBar";
import ForumContent from "./forumContent/forumContent";

function Forum() {
  const username = ''

  return(
    <>
      <NavBar now="forum"></NavBar>
      <ForumContent></ForumContent>
    </>
  )
}

export default Forum