import Image from "next/image";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="">
      <nav className="flex items-center h-20 justify-between bg-gradient-to-r to-indigo-900 from-fuchsia-800 bg-opacity-20 px-8 text-fuchsia-200 font-bold shadow-2xl">
        <div className="">
          <Link to='/'>
            <div>
              <Image src={logo} alt="logo" className=" h-16 w-auto bg-fuchsia-50 rounded-full"/> 
            </div>
          </Link>
        </div>
        <ul className="flex justify-between gap-4 ml-40">
          <li className="hover:bg-yellow-200 hover:text-fuchsia-800 px-4  hover:cursor-pointer rounded-sm">
          <Link to="/#about">About us</Link>
          </li>
          <li className="hover:bg-yellow-200 hover:text-fuchsia-800 px-4  hover:cursor-pointer rounded-sm">
          <Link to="/#member">Become a member</Link></li>
        </ul>
      </nav>
    </div>
  );
}