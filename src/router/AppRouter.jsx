import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/recipe/Main";
import Login from "../pages/login";
import About from "../pages/about";
import RecipeCard from "../components/recipe/RecipeCard";
import PrivateRouter from "./PrivateRouter";

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route element={<PrivateRouter />}>
        <Route path="/details" element={<RecipeCard />} />
        <Route exact path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
