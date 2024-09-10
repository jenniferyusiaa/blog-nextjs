"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/posts",
      label: "Posts",
    },
    {
      href: "/create-post",
      label: "Create post",
    },
  ];

  return (
    <div className="flex p-2 gap-5">
      <div>
        <Link href="/">
          <Image
            src="https://bytegrad.com/course-assets/youtube/example-logo.png"
            alt="Logo"
            height={35}
            width={35}
          />
        </Link>
      </div>

      <nav>
        <ul className="flex gap-2">
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className={pathname === href ? "to-zinc-900" : "text-zinc-400"}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
