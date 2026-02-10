"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <li>
      <Link
        href={href}
        className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300
          ${isActive ? "text-primary" : "text-base-content/70 hover:text-primary"}
        `}
      >
        {children}
        {/* Animated Underline */}
        <span
          className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out
            ${isActive ? "w-full" : "w-0"}
          `}
        ></span>
      </Link>
    </li>
  );
};

export default NavLink;