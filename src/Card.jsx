import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card p-3">
          <img
            style={{ height: "183px" }}
            src={props.img}
            className="card-img-top"
            alt={props.title}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              {props.title}
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" className="button">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
