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
  toogleComponent.setHours(17, 0, 0, 0);
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
  const [currentTime, setCurrentTime] = useState(false);
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
    useEffect(
        () => {
        fetch("https://timezoneapi.io/api/ip/?token=aotrCOJkAzrNAMzWumKw")
          .then((response) => response.json())
          .then((json) => {
            setCurrentTime(json);
            console.log(json);
          });
  }, []);

    let checkEvening;
    
    if ( isEvening === true) {
    checkEvening = pressed ?  (
      <EveningLess
        onPress={press}
        onRefresh={refresh}
        randomQuote={randomQuote.en}
        author={randomQuote.author}
      />
    ) : (
      <Evening
        onPress={press}
        onRefresh={refresh}
        randomQuote={randomQuote.en}
        author={randomQuote.author}
      />
    );
  } else 
    checkEvening = pressed ?
        (
          <MorningLess
            onPress={press}
            onRefresh={refresh}
            randomQuote={randomQuote.en}
            author={randomQuote.author}
            city={currentTime.data.city}
            //country={currentTime.data.timezone.country_code}
          />
        )
      :  (
          <Morning
            onPress={press}
            onRefresh={refresh}
            randomQuote={randomQuote.en}
            author={randomQuote.author}
            city={currentTime.data.city}
            //country={currentTime.data.timezone.country_code}
            //time={currentTime.data.}
          />
        );
  return <>{checkEvening}</>;
};
export default EveningCheck;
