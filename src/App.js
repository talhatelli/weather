import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";


function App() {
  const [city,setcity]=useState() ;
  const key="dbe08e166bab67e386089961e0967471";
  useEffect(() => { 
    async function getApi() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${key}&units=metric`);
      console.log(response);
      setcity=(response.data);
    } catch (error) {
      console.error(error);
    }
  }
    getApi();
  },[]);

  return (
    <div className="App">
     <div>
       <input className='border-8' type="text"/>
     </div>
    </div>
  );
  
} export default App;
