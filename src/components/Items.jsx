const Items = () => {
    return (
      <div className="flex flex-wrap justify-center space-x-4 p-4">
        <button className="flex flex-col items-center  text-primary rounded-lg p-4 transition-transform transform hover:scale-105">
          <img alt="brake-pads" src="https://openui.fly.dev/openui/24x24.svg?text=🛑" />
          <span className="font-semibold mt-2">Brake Pads</span>
          <span className="text-muted-foreground">Get trusted stopping power</span>
        </button>
  
        <button className="flex flex-col items-center  text-primary rounded-lg p-4 transition-transform transform hover:scale-105">
          <img alt="car-bulbs" src="https://openui.fly.dev/openui/24x24.svg?text=💡" />
          <span className="font-semibold mt-2">Car Bulbs</span>
          <span className="text-muted-foreground">Increased light output & extended life</span>
        </button>
  
        <button className="flex flex-col items-center  text-primary rounded-lg p-4 transition-transform transform hover:scale-105">
          <img alt="air-filters" src="https://openui.fly.dev/openui/24x24.svg?text=🌬️" />
          <span className="font-semibold mt-2">Air Filters</span>
          <span className="text-muted-foreground">Maximize engine performance</span>
        </button>
  
        <button className="flex flex-col items-center text-primary rounded-lg p-4 transition-transform transform hover:scale-105">
          <img alt="moto-oils" src="https://openui.fly.dev/openui/24x24.svg?text=🛢️" />
          <span className="font-semibold mt-2">Moto Oils</span>
          <span className="text-muted-foreground">Premium quality oil for your engine</span>
        </button>
  
        <button className="flex flex-col items-center  text-primary rounded-lg p-4 transition-transform transform hover:scale-105">
          <img alt="spark-plugs" src="https://openui.fly.dev/openui/24x24.svg?text=⚡" />
          <span className="font-semibold mt-2">Spark Plugs</span>
          <span className="text-muted-foreground">Maintain engine efficiency</span>
        </button>
      </div>
    )
  }
  
  export default Items;
  