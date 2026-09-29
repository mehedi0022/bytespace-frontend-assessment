"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#top", active: true },
  { label: "Courses", href: "#courses", active: false },
  { label: "Creators", href: "#creators", active: false },
] as const;

const ACTION_ITEMS = [
  { label: "Sign In", href: "#signin" },
  { label: "Join Us", href: "#join" },
] as const;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 h-20 text-shuttle-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out ${scrolled ? "bg-brand-blue/75 shadow-lg backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div
        className="relative mx-auto h-20 w-[min(1200px,calc(100%-48px))]"
      >
        <a
          className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-2 text-inherit no-underline transition-colors duration-300"
          href="#top"
          aria-label="ByteSpace home"
        >
          <Image
            src="/assets/logo/menu.svg"
            alt=""
            width={29}
            height={32}
            priority
          />
          <span className="translate-y-[3px] font-['Clash_Display',sans-serif] text-2xl font-bold leading-none">
            ByteSpace
          </span>
        </a>
        <nav
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-6 max-[640px]:hidden"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              className={`text-base text-shuttle-50 no-underline transition-colors duration-200 hover:text-brand-lime ${item.active ? "font-medium" : ""}`}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div
          className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-6"
        >
          {ACTION_ITEMS.map((item) => (
            <a
              className="text-base text-shuttle-50 no-underline transition-colors duration-200 hover:text-brand-lime max-[640px]:hidden"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
          <button
            className="grid size-6 place-items-center border-0 bg-transparent p-0"
            type="button"
            aria-label="Open menu"
          >
            <span className="relative size-6">
              <Image
                className="absolute left-1 top-0.5 h-5 w-4"
                src="/assets/logo/search.svg"
                alt=""
                width={16}
                height={20}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
