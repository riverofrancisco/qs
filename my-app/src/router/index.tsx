import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/Landing/Landing";
import NavBar from "../components/Nav/Navbar";
import Footer from "../components/Landing/Footer";

export const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        
        <Route path={`/`} element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
