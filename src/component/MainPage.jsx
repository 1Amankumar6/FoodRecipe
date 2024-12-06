import React, { useState } from "react";
import axios from "axios";
import MealCard from "./MealCard";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search.trim() === "") {
      setMsg("Please enter a dish name.");
      setData([]); // Clear previous data when search input is empty
      return;
    }
    setMsg("");
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      if (response.data.meals) {
        setData(response.data.meals);
      } else {
        setData([]); // Clear previous data if no meals found
        setMsg("No meals found for this search.");
      }
    } catch (error) {
      setMsg("An error occurred while fetching data.");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Food Recipe App</h1>

      {/* Search Bar */}
      <div className="flex space-x-4 items-center mb-6">
        <input
          type="text"
          placeholder="Enter Dish"
          className="p-2 border rounded w-full"
          onChange={handleInput}
          value={search}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={myFun}
        >
          Search
        </button>
      </div>

      {/* Message */}
      {msg && <h4 className="text-center text-red-500 font-semibold">{msg}</h4>}

      {/* Meal Cards */}
      {data && data.length > 0 ? (
        <div>
          <MealCard detail={data} />
        </div>
      ) : (
        <div className="text-center text-gray-500">
          {msg === "" ? "No meals to show. Try searching a dish." : null}
        </div>
      )}
    </div>
  );
};

export default MainPage;
