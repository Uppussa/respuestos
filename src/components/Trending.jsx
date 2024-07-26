function Trending (){
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold my-4">PRODUCTOS EN TENDENCIA</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-sky-900 rounded-lg shadow-md p-4 relative text-white">
                    <img 
                    src="https://placehold.co/300x200/FFFFFF/000000?text=SKY+Wheels" 
                    alt="SKY Wheels"
                    className="w-full h-auto rounded-lg"/>
                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded absolute top-2 right-2">NEW</span>
                    <h3 className="font-semibold mt-2">SKY Wheels / Niche Road...</h3>
                    <p className="text-lg font-bold">$23.90</p>
                    <button className="mt-2 bg-white text-secondary-foreground hover:bg-secondary/80 px-3 py-1 rounded absolute bottom-2 right-2">🛒</button>
                </div>
                <div className="bg-sky-900  rounded-lg shadow-md p-4 relative text-white">
                    <img src="https://placehold.co/300x200/FFFFFF/000000?text=Custom+Headlights" alt="Custom Headlights" className="w-full h-auto rounded-lg"/>
                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded absolute top-2 right-2">NEW</span>
                    <h3 className="font-semibold mt-2">Custom Headlights</h3>
                    <p className="text-lg font-bold line-through">$35.90</p>
                    <p className="text-lg font-bold text-red-500">$28.72</p>
                    <button className="mt-2 bg-white text-secondary-foreground hover:bg-secondary/80 px-3 py-1 rounded absolute bottom-2 right-2">🛒</button>
                </div>
                <div className="bg-sky-900  rounded-lg shadow-md p-4 relative text-white">
                    <img src="https://placehold.co/300x200/FFFFFF/000000?text=Power+Stop+High+Performance" alt="Power Stop High Performance" className="w-full h-auto rounded-lg"/>
                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded absolute top-2 right-2">NEW</span>
                    <h3 className="font-semibold mt-2">Power Stop High Performance...</h3>
                    <p className="text-lg font-bold">$29.00</p>
                    <button className="mt-2 bg-white text-secondary-foreground hover:bg-secondary/80 px-3 py-1 rounded absolute bottom-2 right-2">🛒</button>

                </div>
                <div className="bg-sky-900  rounded-lg shadow-md p-4 relative text-white">
                    <img src="https://placehold.co/300x200/FFFFFF/000000?text=17%27%27+5+Split+Spokes" alt="17' 5 Split Spokes" className="w-full h-auto rounded-lg"/>
                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded absolute top-2 right-2">NEW</span>
                    <h3 className="font-semibold mt-2"> 5 Split Spokes Chrome...</h3>
                    <p className="text-lg font-bold">$29.00</p>
                    <button className="mt-2 bg-white text-secondary-foreground hover:bg-secondary/80 px-3 py-1 rounded absolute bottom-2 right-2">🛒</button>

                </div>
                <div className="bg-sky-900  rounded-lg shadow-md p-4 relative text-white">
                    <img src="https://placehold.co/300x200/FFFFFF/000000?text=Rockstar+XD775" alt="Rockstar XD775 Chrome Wheel" className="w-full h-auto rounded-lg"/>
                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded absolute top-2 right-2">NEW</span>
                    <h3 className="font-semibold mt-2">Rockstar XD775 Chrome Wheel</h3>
                    <p className="text-lg font-bold">$29.00</p>
                    <button className="mt-2 bg-white text-secondary-foreground hover:bg-secondary/80 px-3 py-1 rounded absolute bottom-2 right-2">🛒</button>

                </div>
            </div>
        </div>
    )
}

export default Trending; 