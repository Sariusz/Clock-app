import React, { useState, useEffect } from "react";
import Evening from "./Evening.js";
import Morning from "./Morning.js";
import MorningLess from "./MorningLess.js";
import EveningLess from "./EveningLess.js";

// Function to check if it's evening based on current time
const checkTime = () => {
  const now = new Date();
  const toggleComponent = new Date();
  toggleComponent.setHours(20, 0, 0, 0);
  return now >= toggleComponent;
};

// Function to get the first part of the author's name
const getAuthorFirstPart = (author) => author.split(",")[0];

const EveningCheck = () => {
  const [randomQuote, setRandomQuote] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0); // Added currentIndex
  const [pressed, setPressed] = useState(false);
  const [isEvening, setIsEvening] = useState(false);
  const [currentTime, setCurrentTime] = useState({});
  const [currentDays, setCurrentDays] = useState({});
  const [quotes, setQuotes] = useState([]);

  // Fetch quotes from a remote API
  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) throw new Error("Network response was not ok");
      const json = await response.json();
      const modifiedQuotes = json.map((quote) => ({
        ...quote,
        author: getAuthorFirstPart(quote.author)
      }));
      setQuotes(modifiedQuotes);
      return modifiedQuotes;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  // Function to refresh and display the next quote
  const refresh = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % quotes.length;
      const nextAuthor = getAuthorFirstPart(quotes[nextIndex].author);
      setRandomQuote({ ...quotes[nextIndex], author: nextAuthor });
      return nextIndex;
    });
  };

  // Function to handle button press
  const press = () => setPressed(!pressed);

  useEffect(() => {
    // Fetch initial data
    const fetchData = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) throw new Error("Network response was not ok");
      const json = await response.json();
      const nextAuthor = getAuthorFirstPart(json[0].author);
      setRandomQuote({ ...json[0], author: nextAuthor });
      const quotes = await fetchQuotes();
      setRandomQuote(quotes[0] || {});
    };
    fetchData();
  }, []);

  useEffect(() => setIsEvening(checkTime()), []);

  useEffect(() => {
    // Fetch current day information
    fetch("http://worldtimeapi.org/api/ip")
      .then((response) => response.json())
      .then((json) => setCurrentDays(json));
  }, []);

  useEffect(() => {
    // Fetch current time information
    fetch("https://timezoneapi.io/api/ip/?token=aotrCOJkAzrNAMzWumKw")
      .then((response) => response.json())
      .then((json) => setCurrentTime(json));
  }, []);

  let checkEvening = null;

  if (isEvening === true) {
    if (typeof currentTime === "object" && typeof currentDays === "object") {
      const commonProps = {
        onPress: press,
        onRefresh: refresh,
        randomQuote: randomQuote.text,
        author: randomQuote.author,
        city: currentTime.data?.city,
        country: currentTime.data?.timezone?.country_code,
        time: currentTime.data?.datetime?.time,
        timeZone: currentTime.data?.datetime?.offset_tzab
      };

      checkEvening = pressed ? (
        <EveningLess
          {...commonProps}
          timeZoneId={currentTime.data?.timezone?.id}
          dayOfYear={currentDays.day_of_year}
          dayOfWeek={currentDays.day_of_week}
          weekOfYear={currentDays.week_number}
        />
      ) : ( 
        <Evening {...commonProps} />
      );
    }
  } else {
    if (typeof currentTime === "object" && typeof currentDays === "object") {
      const commonProps = {
        onPress: press,
        onRefresh: refresh,
        randomQuote: randomQuote.text,
        author: randomQuote.author,
        city: currentTime.data?.city,
        country: currentTime.data?.timezone?.country_code,
        time: currentTime.data?.datetime?.time,
        timeZone: currentTime.data?.datetime?.offset_tzab
      };

      checkEvening = pressed ? (
        <MorningLess
          {...commonProps}
          timeZoneId={currentTime.data?.timezone?.id}
          dayOfYear={currentDays.day_of_year}
          dayOfWeek={currentDays.day_of_week}
          weekOfYear={currentDays.week_number}
        />
      ) : (
        <Morning {...commonProps} />
      );
    }
  }
  return <>{checkEvening}</>;
};

export default EveningCheck;
