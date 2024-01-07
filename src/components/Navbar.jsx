import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [stateOfHam, setstateOfHam] = useState(false);
  let LinkClassnames="block py-2 px-2 text-[15px] text-blue-500 dark:darkMode  md:text-white"
  function handleHam() {
    setstateOfHam(!stateOfHam);
  }
  return (
    <>
      <nav className="relative bg-blue-400 overflow-hidden dark:darkMode">
      {stateOfHam && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={handleHam}
        ></div>
      )}

      <div className="flex justify-between items-center">
        <div className="mx-4 text-2xl p-4 font-bold text-white cursor-pointer">
          News-Pulse
        </div>

        <div className="md:hidden">
          <div className="text-2xl p-3 " onClick={handleHam} role="button">
            {stateOfHam ? '✕' : '☰'}
          </div>
        </div>

        <div
          className={`dark:darkMode ${
            stateOfHam ? 'translate-x-0' : '-translate-x-full'
          } transform md:transform-none transition-transform duration-300 ease-in-out p-4 bg-white fixed inset-y-0 left-0 z-50 md:relative md:flex md:items-center md:bg-transparent md:p-0 md:text-lg `}
        >
            <Link
              to='/'
            className={LinkClassnames}
          >
            Home
          </Link>
          <Link
            className={LinkClassnames}
            to="/science"
          >
            Science
          </Link>
          <Link
            className={LinkClassnames}
            to="/sports"
          >
            Sports
          </Link>
          <Link
            className={LinkClassnames}
            to="/entertainment"
          >
            Entertainment
          </Link>
            <Link
             to="/business"
              className={LinkClassnames}
          
            >
            Business
            </Link>
            <Link
             to="/health"
              className={LinkClassnames}
          
            >
            Health
            </Link>
            <Link
             to="/technology"
              className={`${LinkClassnames} mr-3`}
          
            >
            Technology
            </Link>

               
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
