

const TopBar = () => {
  return (
    <div className="bg-zinc-800 text-zinc-200 py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-2 sm:mb-0">
            <a href="#" className="hover:text-zinc-400">REGISTER</a>
            <a href="#" className="hover:text-zinc-400">MY ACCOUNT</a>
         
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4">
    
            <span>CURRENCY: USD</span>
            <a href="#" className="hover:text-zinc-400">SIGN IN</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;