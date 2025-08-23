"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User, // FaUser
  FolderOpen, // FaFolderOpen
  BriefcaseBusiness, // FaBriefcase
  Mail, // FaEnvelope
  Home, // FaHome
} from "lucide-react";
import ThemeIcon from "./ThemeIcon";

const Navbar = () => {
  const pathname = usePathname();

  const navData = [
    { icon: <Home className="icon-size" />, path: "/", title: "Home" },
    { icon: <User className="icon-size" />, path: "/about", title: "About" },
    {
      icon: <BriefcaseBusiness className="icon-size" />,
      path: "/career",
      title: "Career",
    },
    {
      icon: <FolderOpen className="icon-size" />,
      path: "/project",
      title: "Projects",
    },
    {
      icon: <Mail className="icon-size" />,
      path: "/contact",
      title: "Contact",
    },
  ];

  return (
    <>
      <nav className="sticky w-fit bg-muted-bg top-2 z-50 rounded-full mx-auto my-4 px-2 backdrop-blur-3xl shadow-xl shadow-custom">
        <ul className="flex gap-2 md:gap-2 text-lg md:text-xl bg-transparent text-content">
          {navData.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <li key={index} className="w-full flex justify-center py-1">
                <Link
                  title={item.title}
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
