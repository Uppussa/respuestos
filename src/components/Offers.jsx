import amortig1 from '../assets/amortig1.png'
import amortig2 from '../assets/amortig2.png'
import amortig3 from '../assets/amortig3.png'
import amortig4 from '../assets/amortig4.png'
import amortig5 from '../assets/amortig5.png'



function Offers() {
  return (
    <div className="bg-[#EBEBEB] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#00007A] text-center">OFERTAS DEL DÍA</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <OfferCard
            image={amortig1}
            alt="Sparta Custom Headlights"
            brand="Amortiguadores"
            name="Descripcion del producto"
            price="28.72"
            oldPrice="35.99"
          />
          <OfferCard
            image={amortig2}
            alt="Powerstop"
            brand="Amortiguadores"
            name="Descripcion del producto"
            price="29.00"
          />
          <OfferCard
            image={amortig3}
            alt="Dynamics"
            brand="Amortiguadores"
            name="Descripcion del producto"
            price="29.00"
          />
          <OfferCard
            image={amortig4}
            alt="Spectra Premium"
            brand="Amortiguadores"
            name="Descripcion del producto"
            price="11.90"
          />
          <OfferCard
            image={amortig5}
            alt="Carauccion"
            brand="Amortiguadores"
            name="Descripcion del producto"
            price="11.90"
          />
        </div>
      </div>
    </div>
  );
}

function OfferCard({ image, alt, brand, name, price, oldPrice }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <div className="relative">
        <img
          className="w-full h-48 object-cover transition-transform transform group-hover:scale-105"
          src={image}
          alt={alt}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="bg-[#FFFF01] text-[#00007A] font-bold px-4 py-2 rounded-full hover:bg-[#00007A] hover:text-[#FFFF01] transition-colors duration-300">
            Agregar al Carrito
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#00007A] text-lg">{brand}</h3>
        <p className="text-gray-600 text-sm mb-2">{name}</p>
        <div className="flex items-end justify-between">
          <p className="font-bold text-2xl text-[#00007A]">${price}</p>
          {oldPrice && (
            <p className="line-through text-gray-500 text-sm">${oldPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Offers;