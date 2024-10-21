const SideBar = () => {
  return (
    <div className="min-h-screen w-1/4 bg-slate-900 px-6 py-6 shadow-lg border-r">
      <button className="bg-slate-700 py-3 w-full px-4 rounded-full text-white text-lg font-semibold shadow-md hover:from-[#FC5C7D] hover:to-[#FF9A8B] transition-all duration-300 flex items-center justify-between">
        Add Todo
        <span className="bg-slate-700 border shadow-lg rounded-full text-center px-3 py-1 text-2xl flex items-center justify-center">
          +
        </span>
      </button>

      <div className="mt-12 text-white px-4 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">All Todos</h1>
        <h2 className="text-2xl font-semibold text-red-500">Priority 1</h2>
        <h2 className="text-2xl font-semibold text-blue-400">Priority 2</h2>
        <h2 className="text-2xl font-semibold text-teal-400">Priority 3</h2>
      </div>
    </div>
  );
};

export default SideBar;
