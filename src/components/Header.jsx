import Tools from "../components/Tools";

function Header() {
  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/100x40" alt="EDMART Logo" />
          <Tools />
        </div>
        <div className="flex items-center space-x-4">
          
          <input
            type="text"
            placeholder="Enter a keyword or product"
            className="border border-zinc-300 rounded-md px-4 py-2 hidden lg:block"
          />
          <select className="border border-zinc-300 rounded-md px-4 py-2 hidden lg:block">
            <option>All Categories</option>
          </select>
          <div className="flex items-center space-x-2">
            <img src="https://placehold.co/20x20" alt="Heart Icon" />
            <img src="https://placehold.co/20x20" alt="Cart Icon" />
            <span>$0.00</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
