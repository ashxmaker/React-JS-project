import React, { Component } from "react";
import Sdata from "./Sdata";
import Card from "./card";

class Service extends Component {
  render() {
    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4 gx-5">
                {Sdata.map((val, ind) => {
                  return (
                    <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Service;
