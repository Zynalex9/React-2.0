import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white w-full flex items-center justify-between px-6 py-4 shadow-xl md:h-[10vh] h-auto">
      <Link to="/">
        <h3 className="text-2xl font-bold text-gray-700 underline">Dashboard</h3>
      </Link>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="text-2xl font-bold text-gray-700 underline md:hidden"
        >
          Menu
        </button>
        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg md:hidden`}
        >
          <Link
            to="/all-incomes"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            All Incomes
          </Link>
          <Link
            to="/all-budgets"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            All Budgets
          </Link>
          <Link
            to="/all-expenses"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            All Expenses
          </Link>
        </div>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link to="/all-incomes">
          <h3 className="text-2xl font-bold text-gray-700 underline">
            All Incomes
          </h3>
        </Link>
        <Link to="/all-budgets">
          <h3 className="text-2xl font-bold text-gray-700 underline">
            All Budgets
          </h3>
        </Link>
        <Link to="/all-expenses">
          <h3 className="text-2xl font-bold text-gray-700 underline">
            All Expenses
          </h3>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
