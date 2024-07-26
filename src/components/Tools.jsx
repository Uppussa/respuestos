import { useState } from 'react';

const Tools = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="lg:hidden focus:outline-none z-50"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? "block" : "hidden"}`} onClick={toggleMenu}></div>
      
      <div className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-md z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform`}>
        <nav>
          <ul className="flex flex-col p-4 space-y-4">
            {['Home', 'Interior', 'Exterior', 'Performance', 'Lighting', 'Wheels & Tires', 'Repair Part', 'Body Part', 'Audio & Electronics', 'Tool & Garage', 'Product', 'Page', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-zinc-600">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Tools;
