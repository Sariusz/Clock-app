import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Morning from './Morning.js';
import Evening from './Evening';
import MorningLess from "./MorningLess.js";
 import EveningLess from "./EveningLess.js";
const checkTime = () =>{
let now = new Date;
let toogleComponent = new Date;
toogleComponent.setHours(10, 0, 0, 0); 

if (now >= toogleComponent) {
  return true
}
else {
  return false
  }
}
const EveningCheck = () => {
    const [refreshed, setRefreshed] = useState(false);
    const [randomQuote, setRandomQuote] = useState(true)
      const refresh = () => {
    fetch('https://programming-quotes-api.herokuapp.com/Quotes/random')
      .then((response) => response.json())
      .then((json) => {
          setRandomQuote(json)
          JSON.stringify(randomQuote)
  }) 
        if (refreshed == true) {
            setRefreshed(true)
           
        }
        else {
            setRefreshed(false)
            }
    } 
    useEffect(() => {
        fetch('https://programming-quotes-api.herokuapp.com/Quotes/random')
      .then((response) => response.json())
      .then((json) => {
          setRandomQuote(json)
          JSON.stringify(randomQuote)
          
  })
    }, [])
   
  
    
    const[pressed, setPressed] = useState(false)
    const press = () => {
        if (pressed == false) { setPressed(true) }
        else {
            setPressed(false)
        }
    }
    
    const [isEvening, setIsEvening] = useState(false);
    useEffect(() => {
        setIsEvening(checkTime());
    }, [])
    let checkEvening;
    if (isEvening === true) {
        checkEvening = <Evening isOn={isEvening} onClick={press}></Evening>
        checkEvening = pressed ? <EveningLess onClick={press} /> : <Evening onClick={press} />
        checkEvening = refreshed ? <Evening onClick = {refresh}randomQuote = {randomQuote.en} author = {randomQuote.author}></Evening> : <Evening onClick ={refresh}randomQuote = {randomQuote.en} author={randomQuote.author}></Evening>
        
    }
    else {
        checkEvening = <Morning isOn={isEvening} onClick={press}></Morning>
        checkEvening = pressed ? <MorningLess onClick={press} /> : <Morning onClick={press} />
        checkEvening = refreshed ? <Morning onClick = {refresh}randomQuote = {randomQuote.en} author = {randomQuote.author}></Morning> : <Morning onClick ={refresh}randomQuote = {randomQuote.en} author={randomQuote.author}></Morning>
    }
    return (
        <>{checkEvening}</>
    )
}
export default EveningCheck
