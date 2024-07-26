import TopBar from "../components/TopBar";
import Header from "../components/Header";
import imagen1 from "../assets/dragon_1.jpg";


function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <img
            src={imagen1}
            alt="Car Background"
            className="w-full h-64 md:h-96 object-cover"
          />
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
        <h1>hola</h1>
      </main>
      <h1>hola como estyas
        
      </h1>
    </div>
  );
}

export default HomePage;
