import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto my-3">
              <div className="row">
                <div className="col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brandName"> Creative Agency</strong>
                  </h1>
                  <h4 className="my-3">
                    We are developers with insane creativity making websites for
                    3 years.
                  </h4>

                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="button "
                    >
                      {props.btName}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 pt-2 headerImg">
                  <img
                    src={props.img}
                    className="img-fluid imgAnimated"
                    alt="Animated Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
