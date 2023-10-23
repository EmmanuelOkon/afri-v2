"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { IoMenu as MenuIcon } from "react-icons/io5";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Media", href: "#" },
  { name: "Sustainability", href: "#" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white drop-shadow-md sticky z-0 lg:z[1000] top-0 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-3 px-4 p6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <img
              className="w-[50px] lg:h-full lg:w-[80px] sm:h-auto"
              src="/logo.png"
              alt="Afri Foods"
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
        <Popover.Group className="hidden lg:flex lg:gap-x-6 items-center">
          {navigation.map((item) => (
            <Fragment key={item.name}>
              <Link
                href={item.href}
                className={({ isActive }) => {
                  return (
                    "px-2 py-2 text-[16px] font-semibold border-b-2 " +
                    (isActive
                      ? " text-red-500 font-semibold text-lg"
                      : "text-grey700 text-opacity-80 border-green border-opacity-0 hover:border-green hover:text-green hover-text-green")
                  );
                }}
              >
                {item.name}
              </Link>
            </Fragment>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://dashboard.aajexpress.org/quote/"
            className=" py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded text-green bg-orange outline-none hover:bg-fadeOrange hover:text-orange lg:font-medium border-2 border-orange"
          >
            Get Estimate
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-red-600 drop-shadow-md h-fit px-6 py-6 sm:ring-1 sm:ring-orange">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-fadeOrange">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Fragment key={item.name}>
                    <Link
                      href={item.href}
                      className={({ isActive }) => {
                        return (
                          "-mx-3 block border-l-2 px-3 py-2 text-base leading-7 w-fit " +
                          (isActive
                            ? "  text-orange font-semibold"
                            : "text-blue text-opacity-80 border-blue border-opacity-0 hover:border-orange hover:text-orange")
                        );
                      }}
                    >
                      {item.name}
                    </Link>
                  </Fragment>
                ))}
              </div>
              <div className="py-6">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                  className="-mx-3 block border-2 hover:text-orange rounded-md px-3 py-2.5 text-base font-semibold leading-7 text-white bg-orange hover:bg-fadeOrange w-fit"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default TopNav;
