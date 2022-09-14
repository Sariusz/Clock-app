import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Evening from "./Evening.js";
import Morning from "./Morning.js";
import MorningLess from "./MorningLess.js";
import EveningLess from "./EveningLess.js";

const checkTime = () => {
  let now = new Date();
  let toogleComponent = new Date();
  toogleComponent.setHours(16, 0, 0, 0);
  if (now >= toogleComponent) {
    return true;
  } else {
    return false;
  }
};
const EveningCheck = () => {
  const [randomQuote, setRandomQuote] = useState(true);
  const [pressed, setPressed] = useState(false);
  const [isEvening, setIsEvening] = useState(false);
  const [currentTime, setCurrentTime] = useState();
  const [currentDays, setCurrentDays] = useState();

  const refresh = () => {
    fetch("https://programming-quotes-api.herokuapp.com/Quotes/random")
      .then((response) => response.json())
      .then((json) => {
        setRandomQuote(json);
      });
  };

  const press = () => {
    setPressed(!pressed);
  };

  useEffect(() => {
    refresh();
  }, []);
  useEffect(() => {
    setIsEvening(checkTime());
  }, []);
  useEffect(() => {
    fetch("http://worldtimeapi.org/api/ip")
      .then((response) => response.json())
      .then((json) => {
        setCurrentDays(json);
        console.log(json);
      });
  }, []);
  useEffect(() => {
    fetch("https://timezoneapi.io/api/ip/?token=aotrCOJkAzrNAMzWumKw")
      .then((response) => response.json())
      .then((json) => {
        setCurrentTime(json);
      });
  }, []);

  let checkEvening;

  if (isEvening === true) {
    if (typeof currentTime === "object" && typeof currentDays === "object") {
      checkEvening = pressed ? (
        <EveningLess
          onPress={press}
          onRefresh={refresh}
          randomQuote={randomQuote.en}
          author={randomQuote.author}
          city={currentTime.data.city}
          country={currentTime.data.timezone.country_code}
          time={currentTime.data.datetime.time}
          timeZone={currentTime.data.datetime.offset_tzab}
          timeZoneId={currentTime.data.timezone.id}
          dayOfYear={currentDays.day_of_year}
          dayOfWeek={currentDays.day_of_week}
          weekOfYear={currentDays.week_number}
        />
      ) : (
        <Evening
          onPress={press}
          onRefresh={refresh}
          randomQuote={randomQuote.en}
          author={randomQuote.author}
          city={currentTime.data.city}
          country={currentTime.data.timezone.country_code}
          time={currentTime.data.datetime.time}
          timeZone={currentTime.data.datetime.offset_tzab}
        />
      );
    }
  } else {
    if (typeof currentTime === "object" && typeof currentDays === "object") {
      console.log(currentTime);
      checkEvening = pressed ? (
        <MorningLess
          onPress={press}
          onRefresh={refresh}
          randomQuote={randomQuote.en}
          author={randomQuote.author}
          city={currentTime.data.city}
          country={currentTime.data.timezone.country_code}
          time={currentTime.data.datetime.time}
          timeZone={currentTime.data.datetime.offset_tzab}
          timeZoneId={currentTime.data.timezone.id}
          dayOfYear={currentDays.day_of_year}
          dayOfWeek={currentDays.day_of_week}
          weekOfYear={currentDays.week_number}
        />
      ) : (
        <Morning
          onPress={press}
          onRefresh={refresh}
          randomQuote={randomQuote.en}
          author={randomQuote.author}
          city={currentTime.data.city}
          country={currentTime.data.timezone.country_code}
          time={currentTime.data.datetime.time}
          timeZone={currentTime.data.datetime.offset_tzab}
        />
      );
    }
  }
  return <>{checkEvening}</>;
};
export default EveningCheck;
