"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Button from "../Button";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItem = [
    { href: "/", key: "home", label: "Home" },
    { href: "/", key: "how_we_work", label: "How We Work?" },
    { href: "/", key: "services", label: "Services" },
    { href: "/", key: "pricing", label: "Pricing" },
    { href: "/", key: "contact_us", label: "Contact Us" },
  ];

  return (
    <>
      <nav className="max-container padding-container flexBetween py-5">
        <Link href="/">
          <h2 className="font-bold text-2xl text-dark">
            Traveling<span className="text-primary">Yuk</span>
          </h2>
        </Link>
        <ul className="hidden md:flex gap-12">
          {navItem.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="hover:font-bold transition-all duration-300 text-dark"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="hidden md:inline-block">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
        <div className="md:hidden flexCenter">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 text-primary" />
            ) : (
              <FaBars className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </nav>
      <div
        ref={menuRef}
        className={`${
          isMenuOpen
            ? "scale-y-[1] duration-300 origin-top fixed w-full"
            : "scale-y-0 duration-300 origin-top fixed w-full"
        } text-dark bg-primary z-30`}
      >
        <div className="grid text-center">
          {navItem.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="hover:font-bold transition-all duration-300 text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
