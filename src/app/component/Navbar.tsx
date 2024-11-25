
"use client"; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname() || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed w-full top-0 left-0 z-50">
      {/* Logo Section */}
      <div className="font-bold text-xl">
        <Link href="/" aria-label="Go to homepage" className="hover:text-gray-200 transition duration-300">
          MyWebsite
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center">
        <button 
          className="text-white focus:outline-none" 
          aria-label="Toggle navigation menu" 
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className={`hidden lg:flex space-x-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link
          href="/"
          className={`hover:text-gray-200 transition duration-300 py-2 px-4 rounded-md ${pathname === '/' ? 'font-bold text-yellow-400' : ''}`}
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:text-gray-200 transition duration-300 py-2 px-4 rounded-md ${pathname === '/about' ? 'font-bold text-yellow-400' : ''}`}
          aria-current={pathname === '/about' ? 'page' : undefined}
        >
          About
        </Link>
        <Link
          href="/blog/1"
          className={`hover:text-gray-200 transition duration-300 py-2 px-4 rounded-md ${pathname.startsWith('/blog') ? 'font-bold text-yellow-400' : ''}`}
          aria-current={pathname.startsWith('/blog') ? 'page' : undefined}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`hover:text-gray-200 transition duration-300 py-2 px-4 rounded-md ${pathname === '/contact' ? 'font-bold text-yellow-400' : ''}`}
          aria-current={pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </Link>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-blue-600 py-4 shadow-md`}>
        <Link
          href="/"
          className={`block text-center py-2 text-xl ${pathname === '/' ? 'font-bold text-yellow-400' : ''}`}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`block text-center py-2 text-xl ${pathname === '/about' ? 'font-bold text-yellow-400' : ''}`}
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          href="/blog/1"
          className={`block text-center py-2 text-xl ${pathname.startsWith('/blog') ? 'font-bold text-yellow-400' : ''}`}
          onClick={toggleMenu}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`block text-center py-2 text-xl ${pathname === '/contact' ? 'font-bold text-yellow-400' : ''}`}
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
