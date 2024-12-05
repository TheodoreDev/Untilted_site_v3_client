import React from "react";
import "../forumContent.css"

function ForumMostView(props) {
    const {position, place, name, desc, pseudo} = props

    return(
        <div className={"podium-container " + position}>
            <div className={"most_view_forum " + position}>
                <div className="info-forum">
                    <h3>{name}</h3>
                    <h4>{desc}</h4>
                </div>
                <div className="info-author">
                    <div className="profil-photo"></div>
                    <a className="author-pseudo">{pseudo}</a>
                </div>
            </div>
            <div className={"podium " + position}>
                <h1>{"#" + place}</h1>
            </div>
        </div>
    )

}

export default ForumMostView