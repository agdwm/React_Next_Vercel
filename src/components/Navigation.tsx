"use client";
import { cn } from "@/helpers/classnames";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
  { text: "Store", href: "/store" },
  { text: "Cart", href: "/cart" },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Strapi Blog
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {navLinks.map((link) => (
          <NavbarLink
            as={Link}
            href={link.href}
            key={link.href}
            active={pathname === link.href}
            className={cn(
              pathname === link.href && "md:text-blue-500 bg-gray-950"
            )}
          >
            <span className="relative">
              {link.text}
              {/* {navLink.text === "Cart" && (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-5">
                  {totalQuantityProduct}
                </div>
              )} */}
            </span>
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
};

export default Navigation;
