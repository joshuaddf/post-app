'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {

    const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/create-post", label: "Create Post" },
  ];

  return (
    <header className="flex justify-between items-center py-4 border-b-2 px-7">
      <Link href="/">
        <div className="w-[40px] h-[40px] bg-zinc-900 rounded-md">
          <span className="text-white text-2xl font-bold flex items-center justify-center p-1">
            J
          </span>
        </div>
      </Link>

      <nav>
        <ul className="flex items-center gap-x-5 text-[14px]">
          {links.map((link) => {
            return (
              <Link className={` ${ pathname === link.href ? "text-zinc-900" : "text-zinc-400" }`} key={link.label} href={link.href}>
                <li>{link.label}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
