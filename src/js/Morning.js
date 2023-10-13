import React, { useState, useEffect } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "../scss/index.scss";
import Weather from "./Weather";
const Morning = (props) => {
  return (
    <div className="main__container">
      <header className="header">
        <div className="header__quote">
          <p>{props.randomQuote}</p>
          <button className="header__button" onClick={() => props.onRefresh()}>
            <FiRefreshCw />
          </button>
        </div>
        <p className="header__author">{props.author}</p>
        <Weather />
      </header>
      <div className="main__clock--container">
        <div className="main__clock__container__greeting--container">
          <BsFillSunFill className="main__clock__container--greeting--sun"></BsFillSunFill>
          <p className="main__clock__container--greeting">
            GOOD MORNING, IT'S CURRENTLY
          </p>
        </div>
        <div className="main__clock__container__time--container">
          <p className="main__clock__container--currentTime">{props.time}</p>
          <p className="main__clock__container--timeZone">{props.timeZone}</p>
        </div>
        <div className="more__container">
          <p className="more__container--location">
            {" "}
            in {props.city}, {props.country}
          </p>
          <div className="more__container--dropdown">
            <p className="more__container--text">MORE</p>
            <button
              className="more__container__dropdown--button"
              onClick={() => props.onPress()}
            >
              <IoIosArrowDropdownCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Morning;
