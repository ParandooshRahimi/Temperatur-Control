import React, { useState } from 'react';
import './style/style.scss'

function App() {
  const[temperatureValue, setTemperatureValue] = useState(10);
  const[temperatureColor, setTemperatureColor] = useState("cold");


  const increaseTemperature = () => {

    const newTemperature = temperatureValue + 1;
      if(newTemperature >= 15){

        setTemperatureColor('hot');
      }
      setTemperatureValue(newTemperature);
  };



  const decreaseTemperature = () => {

    const newTemperature = temperatureValue - 1;
      if(newTemperature < 15){

        setTemperatureColor('cold');
      }
      setTemperatureValue(newTemperature);
  };  



  return (

    <div className='app-container'>
      <div className='temp-display-container'>
      <div className={ `temp-display  ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='container-btn'>
        <button className='hot-btn'  onClick={()=> increaseTemperature() }>+</button>
        <button className='cold-btn' onClick={()=> decreaseTemperature() }>-</button>
       </div>
    </div>
  );
}

export default App;
