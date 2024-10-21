const Header = () => {
  return (
    <header className="bg-slate-900 w-full flex items-center justify-between py-4 px-10 shadow-lg border-b">
      <div className="menu text-2xl text-white cursor-pointer hover:text-gray-400 transition-colors duration-300">
        Menu
      </div>
      <div className="name text-2xl text-white font-semibold">
        Sticky Wall
      </div>
    </header>
  );
};

export default Header;
