import React from "react";
import MainPage from "./component/MainPage";
import { Route, Routes } from "react-router-dom";
import MealInfo from "./component/MealInfo";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealid" element={<MealInfo />} />
      </Routes>
    </div>
  );
}

export default App;
