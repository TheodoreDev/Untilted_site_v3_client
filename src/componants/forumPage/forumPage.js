import React from "react";
import ForumContent from "./forumContent/forumContent";
import {addState, removeState} from "../../helper/sessionStorage"

function Forum() {
  const pagekey1 = "page"

  removeState(pagekey1)
  addState(pagekey1, {page: "home/forum"})

  return(
    <>
      <ForumContent></ForumContent>
    </>
  )
}

export default Forum