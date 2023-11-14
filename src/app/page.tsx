"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "../app/components/Slider/Slider";
import Galeria from "../app/components/Galeria/Galeria";
import Info from "../app/components/Info/Info";
import Contacto from "../app/components/Contacto/Contacto";
import Footer from "../app/components/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-white">
      <Slider />
      <Galeria />
      <Info />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;
