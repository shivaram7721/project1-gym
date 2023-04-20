import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Program } from "./pages/program/Program";
import { Training } from "./pages/training/Training";
import { Pricing } from "./pages/pricing/Pricing";
import {Login} from "./pages/login/Login"
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { AboutUs } from "./pages/aboutus/AboutUs";
import { Register } from "./pages/register/Register";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/program" element={<Program />} />
        <Route path="/training" element={<Training />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
