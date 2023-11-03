"use client";

import { Fragment, useState } from "react";
import { Dialog, Popover, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "/public/assets/images/logo.png";
import { FiMenu as MenuIcon } from "react-icons/fi";
// import { NavLink } from "react-router-dom";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import Rwanda from "/public/assets/icons/rwanda.svg";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Media", href: "/media" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white drop-shadow-md sticky lg:z-[900] top-0 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-3 px-4 p6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image
              className="w-[50px] lg:h-full lg:w-[80px] sm:h-auto"
              src={Logo}
              alt="Afri Foods Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-4 items-center">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className={({ isActive }) => {
                return (
                  "px-2 py-2 text-sm font-medium font-raleway " +
                  (isActive
                    ? " text-green font-semibold text-lg"
                    : "text-blue hover:text-lemonGreen text-opacity-80")
                );
              }}
            >
              {item.name}
            </Link>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            rel="noreferrer"
            href="/products"
            className="font-raleway py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded text-white bg-green outline-none hover:bg-lemonGreen lg:font-medium "
          >
            Get Started
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* <div className="fixed inset-0 z-10" /> */}
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white drop-shadow-md h-fit px6 py6 sm:ring-1 sm:ring-green">
          <div className="flex px-6 py-4 items-center justify-between bg-white drop-shadow-md">
            <div className="">
              <Link href="/">
                <Image
                  className="w-[60px] lg:h-full sm:h-auto"
                  src={Logo}
                  alt="Afri Foods Logo"
                />
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt6 flow-root">
            <div className="my-6 ">
              <div className="space-y-2 py6 px-6 flex flex-col ">
                {navigation.map((item) => (
                  <Fragment key={item.name}>
                    <Link
                      href={item.href}
                      className={({ isActive }) => {
                        return (
                          "-mx-3 block px3 py-2 text-base leading-7 w-full border-b border-[#F0F2F5] " +
                          (isActive
                            ? "  text-green font-semibold"
                            : "text-greyBlack  hover:text-green")
                        );
                      }}
                    >
                      {item.name}
                    </Link>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
