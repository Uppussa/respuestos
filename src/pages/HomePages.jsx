import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import imagen1 from "../assets/dragon_1.jpg";
import imagen2 from "../assets/banner.png"
import imagen3 from "../assets/images3.png"
import imagen4 from "../assets/imgan4.jpg"
import Parts from "../components/Parts";
import Footer from "../components/Footer";
import Offers from "../components/Offers";
import Brands from "../components/Brands";
import Trending from "../components/Trending";
import { useState } from "react";

function HomePage() {
  const image = [
    imagen1,
    imagen2,
    imagen3,
    imagen4

  
  ]

  const [expandedColumn, setExpandedColumn] = useState(null);

  const handleExpand = (index) => {
    setExpandedColumn(expandedColumn === index ? null : index);
  };

  return (
    <div className="bg-[#EBEBEB] flex flex-col min-h-screen">
      <TopBar />
      <Header />
      
      <main className="flex-grow">
      <div className="relative">
          <div className="flex h-64 md:h-96">
            {image.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden ${
                  expandedColumn === index ? "flex-grow" : "flex-shrink"
                } transition-all duration-500 ease-in-out cursor-pointer`}
                onClick={() => handleExpand(index)}
                style={{
                  flexBasis: expandedColumn === index ? "100%" : "25%",
                }}
              >
                <img
                  src={image}
                  alt={`Car Background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
            <h1 className="text-2xl md:text-4xl font-bold text-center">SELECT YOUR VEHICLE</h1>
            <p className="text-center mt-2">Over 100,000 Auto and Truck Parts</p>
            <div className="bg-white text-black rounded-md shadow-md mt-4 p-4 w-full max-w-4xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                <select className="border border-zinc-300 rounded-md px-4 py-2 w-full">
                  <option>Select Year</option>
                </select>
                <select className="border border-zinc-300 rounded-md px-4 py-2 w-full">
                  <option>Select Make</option>
                </select>
                <select className="border border-zinc-300 rounded-md px-4 py-2 w-full">
                  <option>Select Model</option>
                </select>
                <select className="border border-zinc-300 rounded-md px-4 py-2 w-full">
                  <option>Select Device</option>
                </select>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">
                  FILTER
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </main>
      <Parts />
      <Offers/>
      <Brands/>
      <Trending/>
      <Footer />

      <a
        href="https://wa.me/+18098497925" // Reemplaza con tu número de WhatsApp
        className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" width="30" height="30"></img>
      </a>
    </div>
  );
}

export default HomePage;
