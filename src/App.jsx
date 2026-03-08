import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />
      <Hero />
      <Featured />
      <Category />
      <Footer />
    </div>
  );
};

export default App;
