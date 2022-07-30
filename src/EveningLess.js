import React from "react";
import './EveningLess.scss'
import { FaMoon } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";

const EveningLess = (props) => {
  return (
    <div className="main__container--dark">
      <div className="top__half--container">
        <div className="top__half__clock--container">
          <div className="top__half__clock__container__greeting--container">
            <FaMoon className="top__half__clock__container__greeting--sun"></FaMoon>
            <p className="top__half__clock__container__greeting--text">
              GOOD EVENING, IT'S CURRENTLY
            </p>
          </div>
          <div className="top__half__clock__container__time--container">
            <p className="top__half__clock__container--currentTime">
              {props.time}
            </p>
            <p className="top__half__clock__container--timeZone">
              {props.timeZone}
            </p>
          </div>
          <div className="top__half__clock__less--container">
            <p className="top__half__clock__less__container--location">
              in {props.city}, {props.country}
            </p>
            <div className="top__half__clock__less__container__dark--dropdown">
              <p className="top__half__clock__less__container__dark--text">
                LESS
              </p>
              <button
                className="top__half__clock__less__container__dark--button"
                onClick={() => props.onPress()}
              >
                <IoIosArrowDropupCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="more__clock--container">
        <div className="more__clock__container--dayinfo">
          <p>CURRENT TIMEZONE</p>
          <h1>{props.timeZoneId}</h1>
          <p>DAY OF THE YEAR</p>
          <h1>{props.dayOfYear}</h1>
        </div>
        <div className="more__clock__container--weekinfo">
          <p>DAY OF THE WEEK</p>
          <h1>{props.dayOfWeek}</h1>
          <p>CALENDAR WEEK</p>
          <h1>{props.weekOfYear}</h1>
        </div>
      </div>
    </div>
  );
};
export default EveningLess;
