import React from "react";
import './forumContent.css'
import ForumSuggestion from './forumSuggestion/forumSuggestion.js';
import ForumMostView from './forumMostView/forumMostView.js';

function ForumContent() {
  const suggestions_name_list = ["test1", "test2", "test3"]
  const suggestions_description_list = ["Une suggestion de test pour dev", "Une autre suggestion de test pour dev", "Une 3e suggestion de test pour dev"]
  const suggestions_pseudo_list = ["ThéodoreAdmin", "Ted", "Inconnu"]

  const most_view_name_list = ["test1", "test2", "test3"]
  const most_view_description_list = ["meilleur forum", "Second forum", "3e forum"]
  const most_view_pseudo_list = ["ThéodoreAdmin", "Ted", "Inconnu"]

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
      <div className="most_view">
      <h2>Most Viewed :</h2>
        <div className="most_view_container">
          <ForumMostView
            position="deux" 
            place="2" 
            name={most_view_name_list[1]} 
            desc={most_view_description_list[1]} 
            pseudo={most_view_pseudo_list[1]}
          ></ForumMostView>
          <ForumMostView
            position="un" 
            place="1" 
            name={most_view_name_list[0]} 
            desc={most_view_description_list[0]} 
            pseudo={most_view_pseudo_list[0]}
          ></ForumMostView>
          <ForumMostView
            position="trois" 
            place="3" 
            name={most_view_name_list[2]} 
            desc={most_view_description_list[2]} 
            pseudo={most_view_pseudo_list[2]}
          ></ForumMostView>
        </div>
      </div>
    </div>
  )
}

export default ForumContent