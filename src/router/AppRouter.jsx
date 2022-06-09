import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/recipe/Main";
import Login from "../pages/login";
import About from "../pages/about";
import RecipeCard from "../components/recipe/RecipeCard";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<RecipeCard />} />
      
    </Routes>
  );
}

export default AppRouter;
