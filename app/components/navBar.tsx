import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50 bg-gray-800 w-full h-16">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl"></div>
        <button
          className="text-white block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div className={`lg:flex ${isOpen ? "block" : "hidden"} lg:block`}>
        <ul className="space-y-2 lg:space-y-0 lg:space-x-4 lg:flex text-white">
          <li>
            <Link href={"/home"}>Home</Link>
          </li>
          <li>
            <Link href={"/servicos"}>Serviços</Link>
          </li>
          <li>
            <Link href={"/blog"}> Blog</Link>
          </li>
          <li>
            <Link href={"/contato"}> Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
