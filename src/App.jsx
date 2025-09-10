import React from "react";
import Navbar from "./component/Navbar/index";
import HeroSection from "./component/Hero-Section/index";
import Card from "./component/Card/index";
import About from "./component/about/index";
import Footer from "./component/footer";
import History from "./component/History";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <Card></Card>
              <About />
              <History />
              <Footer />
            </>
          }
        />
        <Route
          path="/card"
          element={
            <>
              <Navbar></Navbar>
              <Card />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar></Navbar>
              <About />
            </>
          }
        />
        <Route
          path="/history"
          element={
            <>
              <Navbar></Navbar>
              <History />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
