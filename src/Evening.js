import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./evening.scss";
const Evening = (props) => {
  return (
    <div className="main__container__dark">
      <header className="header">
        <div className="header__quote">
          <p>{props.randomQuote}</p>
          <button className="header__button" onClick={() => props.onRefresh()}>
            <FiRefreshCw color="white" />
          </button>
        </div>
        <p className="header__author">{props.author}</p>
      </header>
      <div className="main__clock--container">
        <div className="main__clock__container__greeting--container">
          <FaMoon className="main__clock__container--greeting--sun"></FaMoon>
          <p className="main__clock__container--greeting">
            GOOD EVENING, IT'S CURRENTLY
          </p>
        </div>
        <div className="main__clock__container__time--container">
          <p className="main__clock__container--currentTime">{props.time}</p>
          <p className="main__clock__container--timeZone">{props.timeZone}</p>
        </div>
        <div className="more__container">
          <p className="more__container--location">
            in {props.city}, {props.country}
          </p>
          <div className="more__container__dark--dropdown">
            <p className="more__container__dark--text">MORE</p>
            <button
              className="more__container__dark__dropdown--button"
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
export default Evening;
