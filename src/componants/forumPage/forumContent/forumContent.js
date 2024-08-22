import React from "react";
import './forumContent.css'
import ForumSuggestion from './forumSuggestion/forumSuggestion.js';

function ForumContent() {
  const suggestions_name_list = ["test1", "test2", "test3"]
  const suggestions_description_list = ["Une suggestion de test pour dev", "Une autre suggestion de test pour dev", "Une 3e suggestion de test pour dev"]
  const suggestions_pseudo_list = ["ThéodoreAdmin", "Ted", "Inconnu"]

  return(
    <div className="container_forum">
      <h1>Forums</h1>
      <div className="suggestions">
        <h2>Suggestions :</h2>
        <ForumSuggestion 
          name={suggestions_name_list[0]} 
          desc={suggestions_description_list[0]}
          pseudo={suggestions_pseudo_list[0]}
        ></ForumSuggestion>
        <ForumSuggestion 
          name={suggestions_name_list[1]} 
          desc={suggestions_description_list[1]}
          pseudo={suggestions_pseudo_list[1]}
        ></ForumSuggestion>
        <ForumSuggestion 
          name={suggestions_name_list[2]} 
          desc={suggestions_description_list[2]}
          pseudo={suggestions_pseudo_list[2]}
        ></ForumSuggestion>
      </div>
    </div>
  )
}

export default ForumContent