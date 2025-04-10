import { FaRegStar } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { BsSun, BsClockHistory, BsBell, BsGrid3X3Gap } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-3 shadow-md">
      <div className="flex items-center gap-2 flex-1">
        <button className="p-2 rounded-lg hover:bg-gray-200">
          <FiMenu size={18} />
        </button>
        <FaRegStar size={18} className="text-gray-500" />
        <span className="text-gray-500 text-sm">Dashboards</span>
        <span className="text-gray-400">/</span>
        <span className="text-black text-sm font-semibold">Default</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <IoMdSearch size={16} className="absolute top-2 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1 rounded-lg bg-gray-100 text-sm focus:outline-none"
          />
        </div>
        <button className="p-2 rounded-lg hover:bg-gray-200">
          <BsSun size={18} />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-200">
          <BsClockHistory size={18} />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-200">
          <BsBell size={18} />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-200">
          <BsGrid3X3Gap size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
