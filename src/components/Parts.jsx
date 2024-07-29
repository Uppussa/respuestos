import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Items from '../components/Items'

const Parts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);

  return (
    <div className="bg-background p-4">
      <Items />
      {/* Promotional Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" data-aos="fade-right">
        <div className="bg-yellow-500 text-black p-6 rounded-lg relative">
          <h2 className="text-2xl font-bold">DEVITA SHOCK ABSORBER</h2>
          <p className="text-lg mt-2">Sale up to 50% Off</p>
          <button className="absolute bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded">SHOP NOW!</button>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg relative">
          <h2 className="text-2xl font-bold">CAR BRAKES 2018</h2>
          <p className="text-lg mt-2">Sale up to 50% Off</p>
          <button className="absolute bottom-4 left-4 bg-yellow-600 text-black px-4 py-2 rounded">SHOP NOW!</button>
        </div>
      </div>
      
      {/* Top Categories Section */}
      <h3 className="text-xl font-semibold mb-4" data-aos="fade-right">TOP CATEGORIES</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 " data-aos="fade-up">
        {[
          { title: 'Seat Covers', img: 'https://placehold.co/150x100' },
          { title: 'Floor Mats', img: 'https://placehold.co/150x100' },
          { title: 'Body Kits', img: 'https://placehold.co/150x100' },
          { title: 'Custom Grilles', img: 'https://placehold.co/150x100' },
          { title: 'Brakes & Rotors', img: 'https://placehold.co/150x100' },
          { title: 'Air Intake Systems', img: 'https://placehold.co/150x100' },
          { title: 'Off-Road Bumpers', img: 'https://placehold.co/150x100' },
          { title: 'Tires', img: 'https://placehold.co/150x100' },
        
        ].map((category, index) => (
          <div key={index} className="bg-white p-4 rounded-lg opacity-45 drop-shadow-xl">
            <img src={category.img} alt={category.title} className="w-full h-32 object-cover rounded" />
            <h4 className="text-center mt-2 font-medium">{category.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parts;
