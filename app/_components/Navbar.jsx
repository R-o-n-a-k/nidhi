"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUser,
  FaFolderOpen,
  FaBriefcase,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import ThemeIcon from "./ThemeIcon";

const Navbar = () => {
  const pathname = usePathname();

  const navData = [
    { icon: <FaHome />, path: "/" },
    { icon: <FaUser />, path: "/about" },
    { icon: <FaBriefcase />, path: "/career" },
    { icon: <FaFolderOpen />, path: "/project" },
    { icon: <FaEnvelope />, path: "/contact" },
  ];

  return (
    <>
      <nav className="sticky w-fit bg-transparent top-0 z-50 rounded-full mx-auto my-4 py-1 px-4 backdrop-blur-sm shadow-lg border">
        <ul className="flex gap-3 md:gap-4 text-lg md:text-xl bg-transparent text-content">
          {navData.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <li key={index} className="w-full flex justify-center py-2">
                <Link
                  href={item.path}
                  className={`w-full flex justify-center items-center px-2 py-2 hover:bg-primary-soft rounded-full transition-colors duration-300
                  ${isActive ? "text-primary" : ""}
                `}
                >
                  {item.icon}
                </Link>
              </li>
            );
          })}
          <li className="flex justify-center items-center">|</li>
          <li className="flex justify-center items-center pr-2">
            <ThemeIcon />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
