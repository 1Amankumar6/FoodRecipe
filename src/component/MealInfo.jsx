import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const jsonData = await get.json();
      setInfo(jsonData.meals[0]);
    };

    getInfo();
  }, [mealid]);

  return (
    <div className="container mx-auto p-6">
      {!info ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            src={info.strMealThumb}
            alt={info.strMeal}
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{info.strMeal}</h1>
          <h3 className="text-xl font-semibold mb-2">Instructions</h3>
          <p className="text-gray-700">{info.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default MealInfo;
