import React from "react";
import "./index.css";
import program_1 from "../../Assets/program-1.png";
import program_2 from "../../Assets/program-2.png";
import program_3 from "../../Assets/program-3.png";
import program_icon_1 from "../../Assets/program-icon-1.png";
import program_icon_2 from "../../Assets/program-icon-1.png";
import program_icon_3 from "../../Assets/program-icon-1.png";
const Programs = () => {
  return (
    <div className="programs ">
      <div className="program">
        <img src={program_1} alt="program" />
        <div className="caption">
          <img src={program_icon_1} alt="icon" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="program" />
        <div className="caption">
          <img src={program_icon_2} alt="icon" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="program" />
        <div className="caption">
          <img src={program_icon_3} alt="icon" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
