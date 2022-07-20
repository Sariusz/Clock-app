import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Morning from './Morning.js';
import Evening from './Evening';

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
const Bulb = ({ isOn }) => {
    if(isOn === false){
    return (
        <Morning />
       
        )
    }
    else {
        return (
        <Evening/>
        )
    }
}
    export default function App2(){
    const [isOn] = useState(false);
    useEffect(() => {
    setIsEvening(checkTime());
}, [])
    return (
    <div className="App">
      <Bulb isOn={isOn} />
    </div> 
    )
}


