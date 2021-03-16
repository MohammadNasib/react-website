import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function Service() {
  return (
    <>
      <div className="mt-5">
        <h1 className="text-center mb-4">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, indx) => {
                return <Card key={indx} title={val.title} img={val.img} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
