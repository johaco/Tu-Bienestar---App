import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Calculators from "./pages/calculators";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
