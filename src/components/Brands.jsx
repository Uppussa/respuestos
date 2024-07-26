function Brands() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-600 text-primary-foreground p-4 rounded-lg">
                <h2 className="text-xl font-bold">LED HEADLIGHT</h2>
                <p className="text-lg">Sale up to 50% Off</p>
                <a href="#" className="bg-white text-secondary-foreground hover:bg-secondary/80 p-2 rounded mt-2 inline-block">SHOP NOW!</a>
                <img 
                aria-hidden="true" 
                alt="LED Headlight"
                src="https://openui.fly.dev/openui/300x200.svg?text=LED+Headlight" />
            </div>
            <div className="bg-purple-500 text-white p-4 rounded-lg">
                <h2 className="text-xl font-bold">PERFORMANCE BRAKE KITS</h2>
                <p className="text-lg">Sale up to 50% Off</p>
                <a href="#" className="bg-white text-secondary-foreground text-black hover:bg-secondary/80 p-2 rounded mt-2 inline-block">SHOP NOW!</a>
                <img 
                aria-hidden="true" 
                alt="Performance Brake Kits"
                src="https://openui.fly.dev/openui/300x200.svg?text=Brake+Kits" />
            </div>
            <div className="bg-orange-500 text-white p-4 rounded-lg">
                <h2 className="text-xl font-bold">CUSTOMIZE YOUR RIDE</h2>
                <p className="text-lg">Sale up to 30% Off</p>
                <a href="#" className="bg-white text-secondary-foreground hover:bg-secondary/80 p-2 rounded mt-2 inline-block text-black">SHOP NOW!</a>
                <img 
                aria-hidden="true" 
                alt="Customize Your Ride"
                src="https://openui.fly.dev/openui/300x200.svg?text=Customize+Your+Ride" />
            </div>
            </div>
            <h3 className="text-xl font-bold mb-4">FEATURED BRANDS</h3>
            <div className="flex items-center justify-between overflow-x-auto mb-8">
            <img className="h-auto" src="https://openui.fly.dev/openui/100x50.svg?text=AFE" alt="AFE Power" />
            <img className="h-auto" src="https://openui.fly.dev/openui/100x50.svg?text=ARK" alt="ARK Performance" />
            <img className="h-auto" src="https://openui.fly.dev/openui/100x50.svg?text=BOSCH" alt="Bosch" />
            <img className="h-auto" src="https://openui.fly.dev/openui/100x50.svg?text=BUDGET" alt="Budget" />
            <img className="h-auto" src="https://openui.fly.dev/openui/100x50.svg?text=CARQUEST" alt="Carquest" />
            <img className="h-auto" src="https://openui.fly.dev/openui/100x50.svg?text=DYNAMIC" alt="Dynamic" />
            <img className="h-auto" src="https://openui.fly.dev/openui/100x50.svg?text=KONI" alt="Koni" />
            <img className="h-auto" src="https://openui.fly.dev/openui/100x50.svg?text=NRSBRAKES" alt="NRS Brakes" />
            
            
            </div>
            <div className="flex items-center justify-between mb-4">
                <button id="scrollLeft" className="bg-gray-200 text-secondary-foreground hover:bg-secondary/80 p-2 rounded">←</button>
                <button id="scrollRight" className="bg-gray-200  text-secondary-foreground hover:bg-secondary/80 p-2 rounded">→</button>
            </div>
        </div>

    );
}

export default Brands; 