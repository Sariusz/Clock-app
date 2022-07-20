import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Morning from './Morning.js';
import Evening from './Evening';
import MorningLess from "./MorningLess.js";

const checkTime = () =>{
let now = new Date;
let toogleComponent = new Date;
toogleComponent.setHours(17, 0, 0, 0); 

if (now >= toogleComponent) {
  return true
}
else {
  return false
  }
}
const EveningCheck = () => {
    const [isEvening, setIsEvening] = useState(false);
    useEffect(() => {
        setIsEvening(checkTime());
    }, [])
    let checkEvening;
    if (isEvening === true) {
        checkEvening = <Evening isOn = {isEvening}></Evening>
    }
    else {
        checkEvening = <Morning isOn = {isEvening}></Morning>
    }
    return (
        <>{checkEvening}</>
    )
}
export default EveningCheck
/*
export default function App2() {
    const [isEvening, setIsEvening] = useState(false);
    useEffect(() => {
        setIsEvening(checkTime);
    }, [])
    
    let x;
    if (isEvening === false) {
        x = <Morning></Morning>
        
    }
    else if(isEvening === true){
        x = <Evening></Evening>
        
    }
    else {
        ;
    }
    return (
        <>{x}</>
    )
}
*/



