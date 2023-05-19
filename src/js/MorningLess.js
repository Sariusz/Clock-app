import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { IoIosArrowDropupCircle } from "react-icons/io";
import "../scss/morningLess.scss";

const MorningLess = (props) => {
  return (
    <div className="main__container">
      <div className="top__half--container__day">
        <div className="top__half__clock--container__day">
          <div className="top__half__clock__container__day__greeting--container">
            <BsFillSunFill className="top__half__clock__container__day__greeting--sun"></BsFillSunFill>
            <p className="top__half__clock__container__day__greeting--text">
              GOOD MORNING, IT'S CURRENTLY
            </p>
          </div>
          <div className="top__half__clock__container__day__time--container">
            <p className="top__half__clock__container__day--currentTime">
              {props.time}
            </p>
            <p className="top__half__clock__container__day--timeZone">
              {props.timeZone}
            </p>
          </div>
          <div className="top__half__clock__less__day--container">
            <p className="top__half__clock__less__container__day--location">
              in {props.city}, {props.country}
            </p>
            <div className="top__half__clock__less__container__day--dropdown">
              <p className="top__half__clock__less__container__day--text">
                LESS
              </p>
              <button
                className="top__half__clock__less__container__day--button"
                onClick={() => props.onPress()}
              >
                <IoIosArrowDropupCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="more__clock__container--day">
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
export default MorningLess;
