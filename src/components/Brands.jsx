import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import brands1 from '../assets/brands/brands1.png';
import brands2 from '../assets/brands/brands2.png';
import brands3 from '../assets/brands/brands3.png';
import brands4 from '../assets/brands/brands4.png';
import brands5 from '../assets/brands/brands5.png';
import brands6 from '../assets/brands/brands6.png';
import brands7 from '../assets/brands/brands7.png';
import brands8 from '../assets/brands/brands8.png';
import desc1 from '../assets/desc/desc1.png';
import desc2 from '../assets/desc/desc2.png';
import desc3 from '../assets/desc/desc3.png';

const Brands = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-600 text-primary-foreground p-4 rounded-lg" data-aos="flip-right">
          <h2 className="text-xl font-bold text-white">FRENOS</h2>
          <p className="text-lg text-amber-200">DESCUENTO DEL 50%</p>
          <a href="#" className="bg-white text-secondary-foreground hover:bg-secondary/80 p-2 rounded mt-2 inline-block">SHOP NOW!</a>
          <img aria-hidden="true" alt="LED Headlight" src={desc1} />
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg" data-aos="flip-right">
          <h2 className="text-xl font-bold">TODOS LOS KITS</h2>
          <p className="text-lg text-amber-200">DESCUENTO DEL 50%</p>
          <a href="#" className="bg-white text-secondary-foreground text-black hover:bg-secondary/80 p-2 rounded mt-2 inline-block">SHOP NOW!</a>
          <img aria-hidden="true" alt="Performance Brake Kits" src={desc2} />
        </div>
        <div className="bg-orange-500 text-white p-4 rounded-lg" data-aos="flip-right">
          <h2 className="text-xl font-bold">AMORTIGUACIONES</h2>
          <p className="text-lg text-amber-200">DESCUENTO DEL 30%</p>
          <a href="#" className="bg-white text-secondary-foreground hover:bg-secondary/80 p-2 rounded mt-2 inline-block text-black">SHOP NOW!</a>
          <img aria-hidden="true" alt="Customize Your Ride" src={desc3} />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <h3 className="text-xl font-bold mb-4" data-aos="fade-right">FEATURED BRANDS</h3>
        <div className="flex items-center space-x-4 animate-slide pause-on-hover">
          <img className="carousel-image" src={brands1} alt="AFE Power" />
          <img className="carousel-image" src={brands2} alt="ARK Performance" />
          <img className="carousel-image" src={brands3} alt="Bosch" />
          <img className="carousel-image" src={brands4} alt="Budget" />
          <img className="carousel-image" src={brands5} alt="Carquest" />
          <img className="carousel-image" src={brands6} alt="Dynamic" />
          <img className="carousel-image" src={brands7} alt="Koni" />
          <img className="carousel-image" src={brands8} alt="NRS Brakes" />
          {/* Duplicate images for infinite loop */}
          <img className="carousel-image" src={brands1} alt="AFE Power" />
          <img className="carousel-image" src={brands2} alt="ARK Performance" />
          <img className="carousel-image" src={brands3} alt="Bosch" />
          <img className="carousel-image" src={brands4} alt="Budget" />
          <img className="carousel-image" src={brands5} alt="Carquest" />
          <img className="carousel-image" src={brands6} alt="Dynamic" />
          <img className="carousel-image" src={brands7} alt="Koni" />
          <img className="carousel-image" src={brands8} alt="NRS Brakes" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button id="scrollLeft" className="bg-gray-200 text-secondary-foreground hover:bg-secondary/80 p-2 rounded">←</button>
        <button id="scrollRight" className="bg-gray-200 text-secondary-foreground hover:bg-secondary/80 p-2 rounded">→</button>
      </div>
    </div>
  );
}

export default Brands;
