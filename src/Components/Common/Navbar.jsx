import { useState } from "react";
import {Link }from "react-router-dom";
        

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-600">
          SchoolName
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/About" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/Academics" className="hover:text-blue-600">Academics</Link></li>
          <li><Link to="/Admission" className="hover:text-blue-600">Admissions</Link></li>
          <li><Link to="/Events" className="hover:text-blue-600">Events</Link></li>
          <li><Link to="/Contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/Pages" className="hover:text-blue-600">Pages</Link></li>
          <li><Link to="/Messages" className="hover:text-blue-600">Messages</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/messages" className="hover:text-blue-600">Messages</Link></li>
          <li><Link to="/academics" className="hover:text-blue-600">Academics</Link></li>
          <li><Link to="/admissions" className="hover:text-blue-600">Admissions</Link></li>
          <li><Link to="/events" className="hover:text-blue-600">Events</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/pages" className="hover:text-blue-600">Pages</Link></li>
        </ul>
      )}
    </nav>
  );
}
