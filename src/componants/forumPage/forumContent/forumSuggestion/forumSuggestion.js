import React from "react";
import "../forumContent.css"

function ForumSuggestion(props) {
    const {name, desc, pseudo} = props

    return(
        <div className="forum-suggestion">
            <div className="info-suggestion">
                <h3>{name}</h3>
                <h4>{desc}</h4>
            </div>
            <div className="info-author">
                <div className="profil-photo"></div>
                <a className="author-pseudo">{pseudo}</a>
            </div>
        </div>
    )

}

export default ForumSuggestion