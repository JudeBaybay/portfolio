import React from "react";
import "./Qualifications.css";
import Experiences_Data from "../../assets/experiences_data";
import Experiences_Data1 from "../../assets/experiences_data1";
const Qualifications = () => {
  return (
    <div id='quali' className="qualifications">
      <div className="qualificationsTitle">
        <h1>Education and Achievements</h1>
      </div>

      <div className="qualiGrid">
        <div className="qualificationsContainerLeft">
          {Experiences_Data.map((qualifications, index) => {
            return (
              <div key={index} className="qualiFormat">
                <h3>{qualifications.e_no}</h3>
                <h3>{qualifications.e_name}</h3>
                <h3>{qualifications.e_year}</h3>
                <h3>{qualifications.e_award}</h3>
                <h3>{qualifications.e_award1}</h3>
              </div>
            );
          })}
        </div>
        <div className="qualificationsContainerRight">
          {Experiences_Data1.map((qualifications1, index) => {
            return (
              <div key={index} className="qualiFormat1">
                <h3>{qualifications1.e1_no}</h3>
                <h3>{qualifications1.e1_name}</h3>
                <h3>{qualifications1.e1_year}</h3>
                <h3>{qualifications1.e1_award1}</h3>
                <h3>{qualifications1.e1_award2}</h3>
                <h3>{qualifications1.e1_award3}</h3>
                <h3>{qualifications1.e1_award4}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
