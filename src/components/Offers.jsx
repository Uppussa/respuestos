function Offers() {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">OFERTAS DEL DÍA</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative group">
            <img
              className="w-full h-auto transition-transform transform group-hover:scale-105"
              src="https://placehold.co/300x200.png?text=Custom+Headlights"
              alt="Sparta Custom Headlights"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-secondary-foreground px-4 py-2 rounded">
                Agregar al Carrito
              </button>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">Sparta</h3>
              <p className="text-muted-foreground">Custom Headlights</p>
              <p className="font-bold">
                $28.72 <span className="line-through text-muted">$35.99</span>
              </p>
            </div>
          </div>
          <div className="relative group">
            <img
              className="w-full h-auto transition-transform transform group-hover:scale-105"
              src="https://placehold.co/300x200.png?text=Power+Stop+High+Performance"
              alt="Powerstop"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-secondary-foreground px-4 py-2 rounded">
                Agregar al Carrito
              </button>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">Powerstop</h3>
              <p className="text-muted-foreground">Power Stop High Performance...</p>
              <p className="font-bold">$29.00</p>
            </div>
          </div>
          <div className="relative group">
            <img
              className="w-full h-auto transition-transform transform group-hover:scale-105"
              src="https://placehold.co/300x200.png?text=Rockstar+XD775+Chrome+Wheel"
              alt="Dynamics"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-secondary-foreground px-4 py-2 rounded">
                Agregar al carrito
              </button>
            </div>
            <div className="mt-2"></div>
            <h3 className="font-semibold">Dynamics</h3>
            <p className="text-muted-foreground"> 5 Split Spokes Chrome...</p>
            <p className="font-bold">$29.00</p>
          </div>
          <div className="relative group">
            <img
              className="w-full h-auto transition-transform transform group-hover:scale-105"
              src="https://placehold.co/300x200.png?text=Spartan+Grill"
              alt="Spectra Premium"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-secondary-foreground px-4 py-2 rounded">
                Agregar al carrito
              </button>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">Spectra Premium</h3>
              <p className="text-muted-foreground">Spartan Grill</p>
              <p className="font-bold">$11.90</p>
            </div>
          </div>
          <div className="relative group">
            <img
              className="w-full h-auto transition-transform transform group-hover:scale-105"
              src="https://placehold.co/300x200.png?text=Short+Ram+Intake+W%2F+Air+Box"
              alt="Carauccion"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-secondary-foreground px-4 py-2 rounded">
                Agregar al carrito
              </button>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">Carauccion</h3>
              <p className="text-muted-foreground">Short Ram Intake W/ Air Box</p>
              <p className="font-bold">$11.90</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Offers; 