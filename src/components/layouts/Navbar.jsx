"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiShoppingCart, FiMenu } from "react-icons/fi"; // Added FiMenu for cleaner icon
import Logo from "./Logo";
import NavLink from "../buttons/NavLink";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll handling logic
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // If scrolling down AND past 100px, hide navbar
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          // If scrolling up, show navbar
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navLinks = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/products">Products</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </>
  );

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Professional Touches:
         1. backdrop-blur-md: Glass effect
         2. bg-base-100/90: Slight transparency so background shows through blur
         3. shadow-sm: Subtle shadow instead of heavy shadow
      */}
      <div className="navbar bg-base-100/90 backdrop-blur-md shadow-sm border-b border-base-200">
        <div className="flex justify-between max-w-7xl mx-auto w-full px-4">
          
          {/* Mobile Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
                <FiMenu size={24} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-base-200"
              >
                {navLinks}
              </ul>
            </div>
            <Logo />
          </div>

          {/* Desktop Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6">
              {navLinks}
            </ul>
          </div>

          {/* End Actions */}
          <div className="navbar-end flex gap-3">
            <Link 
              href="/cart" 
              className="btn btn-ghost btn-circle hover:bg-base-200 transition-colors"
            >
              <div className="indicator">
                <FiShoppingCart size={20} />
                {/* Optional: Add badge logic here later */}
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </Link>
            
            <Link 
              href="/login" 
              className="btn btn-primary btn-sm md:btn-md px-6 text-white font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;