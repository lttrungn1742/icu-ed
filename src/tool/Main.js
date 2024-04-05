import React from "react";
import "./style.css";
import { useState } from "react";
import  BaseVolume from "./BaseVolume";
import  BaseDate from "./BaseDate";


const Registration = () => {

  const [baseVolume, setBaseVolume] = useState(false);
  const [baseDate, setBaseDate] = useState(true);
  const [classVolume, setClassVolume] = useState("btn btn-lg btn-primary");
  const [classDate, setClassDate] = useState("btn btn-lg");

  

  return (
    <div>
      <section
        className="p-5 w-100"
        style={{  borderRadius: ".5rem .5rem 0 0" }}
      >
        <div className="row">
          <div className="col-12">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <button type="button" className={classVolume} onClick={() => {

                  setBaseVolume(false);
                  setBaseDate(true);
                  setClassVolume("btn btn-lg btn-primary");
                  setClassDate("btn btn-lg");

                }} >
                  Dựa trên thể tích</button>
                <button type="button" className={classDate} onClick={() => {

                  setBaseDate(false);
                  setBaseVolume(true);
                  setClassDate("btn btn-lg btn-primary");
                  setClassVolume("btn btn-lg");

                }}>
                  Dựa trên ngày</button>
              </div>
                <div hidden={baseVolume}> <BaseVolume /> </div>
                <div hidden={baseDate}> <BaseDate /> </div>
                          
                          

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
