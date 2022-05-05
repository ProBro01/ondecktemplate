import React from "react";
import { Trybutton } from "./Trybutton";
import mainico1 from "../Assets/AlternativeTo Logo.svg";
import mainico2 from "../Assets/Capterra Logo.svg";
import mainimage from "../Assets/Hero Image.png"
import "../stylesheets/main.css"

export const Main = () => {
  return (
    <div className="main__cont">
      <div className="main__info">
        <p className="main__info-start">
          Ondeck is your remote <span>conference calling tool</span>
        </p>
        <p className="main__info-line">
          Ondeck is a service that allows you to create beautiful, online, and
          encrypted video calls for you and your remote team
        </p>
        <div>
        <Trybutton />
        </div>
        <p className="main__info-end">
          5.0 Rating based on reviews from:{" "}
          <span>
            <img src={mainico2} className='main__info-icon'/>
          </span>
          <span>
            <img src={mainico1} className='main__info-icon' />
          </span>
        </p>
      </div>
      <div className="main__img-cont">
        <img src={ mainimage } className='main__image'/>
      </div>
    </div>
  );
};
