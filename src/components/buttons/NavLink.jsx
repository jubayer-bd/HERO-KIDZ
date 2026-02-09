"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const path = usePathname()
    return (
        <div>
            <Link className={`hover:text-primary transition-colors duration-300 ${path === href ? "text-primary text-md font-medium border-b-2 border-primary" : ""}`} href={href}>{children}</Link>
        </div>
    );
};

export default NavLink;