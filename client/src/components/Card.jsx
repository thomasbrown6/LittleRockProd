import React from "react";

const Card = props => (
  <article className="card">
    <div className="card-img">
      <h3 className="center">{props.header}</h3>
      <img src={props.image} alt="card image" />
    </div>
    <div className="card-parent-content">
      <div className="card-content">
        <span className="bold">{props.subhead}</span>
        <a className="email" href={"mailto:" + props.email}>
          {props.email}
        </a>
        {props.children}
      </div>
    </div>
  </article>
);

export default Card;
