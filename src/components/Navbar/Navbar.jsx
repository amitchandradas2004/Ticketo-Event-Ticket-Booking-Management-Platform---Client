"use client";

import { cn } from "@/lib/utils";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/Assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";
import { IoTicketOutline } from "react-icons/io5";
const defaultItems = [
  { label: "Home", href: "/", isActive: true },
  { label: "Events", href: "/events" },
  { label: "Pricing", href: "/pricing" },
];

const maxWidthClasses = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[1536px]",
  full: "max-w-full",
};
const user = false;
export default function Navbar({
  brand = (
    <Link
      href={"/"}
      className="flex items-center gap-1 text-xl text-blue-500 dark:text-blue-700 italic font-bold"
    >
      <IoTicketOutline />
      <span>Ticketo</span>
    </Link>
  ),
  items = defaultItems,
  rightContent = (
    <>
      {user ? (
        <Button color="primary" className="w-full">
          Get Started
        </Button>
      ) : (
        <Button className="w-full" variant="danger">
          Logout
        </Button>
      )}
      <div className="w-full">
        {" "}
        <ThemeToggle />
      </div>
    </>
  ),
  className,
  maxWidth = "xl",
  position = "sticky",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        "z-50 w-full px-2",
        position === "sticky" && "sticky top-2 ",
        position === "fixed" && "fixed top-4 left-0",
      )}
    >
      <header
        className={cn(
          "mx-auto flex h-12 items-center overflow-hidden justify-between rounded-2xl border border-white/20 bg-white/10 px-6 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40",
          maxWidthClasses[maxWidth],
          className,
        )}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {brand}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {items?.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "transition hover:text-primary",
                  item.isActive && "font-semibold text-primary",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 md:flex">{rightContent}</div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={cn(
            "mx-auto ml-5 mr-5 mt-1 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40",
            maxWidthClasses[maxWidth],
          )}
        >
          <ul className="space-y-4">
            {items?.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block text-black dark:text-white transition hover:text-primary",
                    item.isActive &&
                      "font-semibold text-primary text-black dark:text-white",
                  )}
                  onPress={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 border-t border-default-200 pt-5">
            {rightContent}
          </div>
        </div>
      )}
    </nav>
  );
}
