import amortig1 from '../assets/amortig1.png'
import amortig2 from '../assets/amortig2.png'
import amortig3 from '../assets/amortig3.png'
import amortig4 from '../assets/amortig4.png'
import amortig5 from '../assets/amortig5.png'


function Trending() {
    return (
      <div className="bg-[#EBEBEB] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#00007A] text-center">
            PRODUCTOS EN TENDENCIA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <TrendingCard
              image={amortig1}
              alt="SKY Wheels"
              name="SKY Wheels / Niche Road..."
              price="23.90"
              isNew={true}
            />
            <TrendingCard
              image={amortig2}
              alt="Custom Headlights"
              name="Custom Headlights"
              price="28.72"
              oldPrice="35.90"
              isNew={true}
            />
            <TrendingCard
              image={amortig3}
              alt="Power Stop High Performance"
              name="Power Stop High Performance..."
              price="29.00"
              isNew={true}
            />
            <TrendingCard
              image={amortig4}
              alt="17' 5 Split Spokes"
              name="5 Split Spokes Chrome..."
              price="29.00"
              isNew={true}
            />
            <TrendingCard
              image={amortig5}
              alt="Rockstar XD775 Chrome Wheel"
              name="Rockstar XD775 Chrome Wheel"
              price="29.00"
              isNew={true}
            />
          </div>
        </div>
      </div>
    );
  }
  
  function TrendingCard({ image, alt, name, price, oldPrice, isNew }) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={image}
            alt={alt}
          />
          {isNew && (
            <span className="bg-[#FFFF01] text-[#00007A] text-xs font-bold px-2 py-1 rounded-full absolute top-2 right-2">
              NUEVO
            </span>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-[#FFFF01] text-[#00007A] font-bold px-4 py-2 rounded-full hover:bg-[#00007A] hover:text-[#FFFF01] transition-colors duration-300">
              Agregar al Carrito
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-[#00007A] text-lg mb-2">{name}</h3>
          <div className="flex items-end justify-between">
            <div>
              {oldPrice && (
                <p className="line-through text-gray-500 text-sm">${oldPrice}</p>
              )}
              <p className="font-bold text-2xl text-[#00007A]">${price}</p>
            </div>
            <button className="bg-[#00007A] text-white p-2 rounded-full hover:bg-[#FFFF01] hover:text-[#00007A] transition-colors duration-300">
              🛒
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Trending;