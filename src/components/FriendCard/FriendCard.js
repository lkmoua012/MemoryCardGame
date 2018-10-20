import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">

    <div onClick={()=> props.removeFriend(props.id)} className="img-container remove">

      <img alt={props.name} src={props.image} className="onClick={()=> props.removeFriend(props.id)}" />
      
    </div>
  </div>
);

export default FriendCard;
