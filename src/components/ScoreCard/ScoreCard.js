import React from "react";
import "./ScoreCard.css";

const ScoreCard = props => (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <span class="navbar-brand">Score: {props.children}</span>
          </div>
        </div>
      </nav>
    )

export default ScoreCard;
