import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const handleIsOpen = () => {
    setIsopen(!isOpen);
  };
  return (
    <div>
      <header className="">
        <nav className="flex items-center justify-between flex-wrap pt-5 pb-5">
          <div className="flex items-center flex-shrink-0 text-white">
            <a
              href="#"
              className="font-semibold text-3xl tracking-tight text-[#150B2B]"
            >
              Recipe Calories
            </a>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={handleIsOpen}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? "" : "md:hidden sm:hidden"
            } `}
          >
            <div className="text-xl sm:flex-col sm:w-7 lg:flex-grow text-center text-[#5C556B] ">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 mr-12 hover:text-black"
              >
                Home
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0  mr-12 hover:text-black"
              >
                Recipes
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 mr-12 hover:text-black"
              >
                About
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-black"
              >
                Search
              </a>
            </div>
            <div>
              <div className="form-control flex items-center">
                <div className="mr-4 flex items-center focus-within:text-gray-600">
                  <div className="relative flex items-center">
                    <IoSearchOutline className="absolute w-6 h-6 ml-4 text-[#585164]" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-64 h-12 md:w-auto rounded-3xl bg-[#f3f2f4] p-4 pl-12 text-[#585164] placeholder-[#585164]"
                  />
                </div>
                <button className="h-12 w-12 bg-[#0BE58A] rounded-full flex justify-center items-center">
                  <FaRegUserCircle className="h-6 w-6 text-[#150B2B] user-icon" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
