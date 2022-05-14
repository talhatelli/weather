
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";
function App() {
  const key = "dbe08e166bab67e386089961e0967471";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
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
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <input weaher
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className=" my-10 px-5 w-[300px] py-5 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
        />
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;

