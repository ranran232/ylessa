'use client'
import React, { useState } from 'react'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = ['home', 'about', 'services'] // match your section IDs

  return (
    <nav className="w-full bg-[#fdf6ee] border-b border-[#e8d5c0] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-[#2d1f14] font-serif text-xl font-bold tracking-tight">
       
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-[#6b4c35] text-sm tracking-wide uppercase font-light hover:text-[#c48264] transition-colors duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contacts"
            className="px-5 py-2 bg-[#2d1f14] text-[#fdf6ee] text-sm rounded-xl tracking-wide hover:bg-[#1a1009] transition-colors duration-200 shadow-sm"
          >
            Work With Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#2d1f14] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#2d1f14] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#2d1f14] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fdf6ee] border-t border-[#e8d5c0] px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-[#6b4c35] text-sm tracking-wide uppercase font-light hover:text-[#c48264] transition-colors duration-200"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a
            href="#contacts"
            className="mt-2 px-5 py-2 text-center bg-[#2d1f14] text-[#fdf6ee] text-sm rounded-xl tracking-wide hover:bg-[#1a1009] transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Work With Me
          </a>
        </div>
      )}
    </nav>
  )
}

export default Nav