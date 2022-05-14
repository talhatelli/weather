import React from "react";

const City = ({ city }) => {
  console.log(city);
  return (
    <div>
     
      <div  style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", 
          }} 
          className="w-[400px] h-[400px] ounded-md shadow mx-auto">   
      <h1 className="text-4xl font-bold">{city.name}</h1>
       <h1 className="text-4xl ">Heat: {city.main.temp} °C</h1>
       <h1 className="text-3xl ">Humidty: %{city.main.humidity} </h1>
        <h1 className="text-3xl ">Wind: {city.wind.speed} km/s</h1>
        <h1 className="text-3xl">{city.weather[0].main}</h1>
      </div>
    </div>
  );
};

export default City;
