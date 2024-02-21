import Image from "next/image";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <nav className='flex items-center justify-between h-20 bg-gradient-to-r to-indigo-900 from-fuchsia-800 bg-opacity-20 px-8 text-fuchsia-200 font-bold shadow-2xl'>
      <div className='flex items-center'>
        <Link to='/'>
          <div>
            <Image src={logo} alt="logo" className='h-16 object-fill object-center w-auto bg-fuchsia-50 rounded-full'/>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex justify-between gap-4 ml-40">
        <ul className="flex">
          <li className="hover:bg-yellow-200 hover:text-fuchsia-800 px-4 rounded-sm">
            <Link to="/#about">About us</Link>
          </li>
          <li className="hover:bg-yellow-200 hover:text-fuchsia-800 px-4 rounded-sm">
            <Link to="/#member">Become a member</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="block text-3xl text-fuchsia-200 focus:outline-none">
          {menuOpen ? '×' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-20 right-8 bg-white p-4 rounded-lg shadow-md">
          <ul>
            <li className="hover:bg-yellow-200 hover:text-fuchsia-800 px-4 py-2 rounded-sm">
              <Link to="/#about">About us</Link>
            </li>
            <li className="hover:bg-yellow-200 hover:text-fuchsia-800 px-4 py-2 rounded-sm">
              <Link to="/#member">Become a member</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}