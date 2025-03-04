import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HamburgerMenu from './HamburgerMenu';

export default function Navbar() {
  return (
    <nav className="flex items-center space-x-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-lg lg:text-xl hover:text-primary transition-colors" aria-label="Home">Home</Link>
        <Link to="/about" className="text-lg lg:text-xl hover:text-primary transition-colors" aria-label="About">About</Link>
        <Link to="/competitions" className="text-lg lg:text-xl hover:text-primary transition-colors" aria-label="Competitions">Competitions</Link>
        <Link to="/contact" className="text-lg lg:text-xl hover:text-primary transition-colors" aria-label="Contact">Contact</Link>
      </div>

      {/* Mobile Navigation */}
      <HamburgerMenu />
    </nav>
  );
}
