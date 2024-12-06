import React from 'react';
import { NavLink } from 'react-router-dom';

const Mealcards = ({ detail }) => {
  console.log(detail);
  return (
    <div className="flex flex-wrap gap-6 justify-center w-11/12 mx-auto mt-12">
      {!detail
        ? "Data Not Found"
        : detail.map((curItem) => {
            return (
              <div
                key={curItem.idMeal}
                className="w-72 h-[380px] text-center bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={curItem.strMealThumb}
                  alt={curItem.strMeal}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <p className="font-semibold mt-3">{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button className="w-32 bg-orange-500 text-white text-lg font-semibold py-2 rounded-full mt-4 hover:bg-orange-600">
                    Recipe
                  </button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default Mealcards;
