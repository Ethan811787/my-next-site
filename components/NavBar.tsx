import { useState } from "react";

import Link from "next/link";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    {/* this is a boolean.  */}


    return (
      <header className="w-full px-6 py-4 bg-white shadow-md">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">Ethans Site</div>
  
          <div className="space-x-6 hidden md:flex">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
  
          <div className="md:hidden">
            <button 
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </nav>




        {isOpen && (
            <div className="md:hidden bg-white px-6 py-4 space-y-2 shadow-md">
                <Link href="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/projects" className="block text-gray-700 hover:text-blue-600">Projects</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
        )}
      </header>
    );
  }