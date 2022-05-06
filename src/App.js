import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import City from './City';

function App() {
  const key="dbe08e166bab67e386089961e0967471";
  const[search,setSearch]=useState("");
  const [city,setCity]=useState() ;
 
  useEffect(() => { 
    async function getApi() {
    try {
      const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
      );
      console.log(response);
      setCity(response.data);
    } catch (error) {
      console.error(error);
    }
  }
    getApi();
  },[search]);
  console.error(search);

  return (
    <div className="App">
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Placeholder"
        className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
      />
      {city && <City city={city} />}
    </div>
  </div>
  );
} export default App;
