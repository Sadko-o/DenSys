import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const navigation = [
  { name: "About Us", href: "#", current: true },
  { name: "Specialists", href: "#", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeHeader() {
  const auth = false;
  const navigate = useNavigate();

  const navigateToSignInPage = () => {
    navigate("/signin");
  };
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Disclosure
      as="nav"
      className="main"
      class="fixed -z-n1 flex justify-between "
      style={{ width: "100vw" }}
    >
      {({ open }) => (
        <>
          <div className="w-full sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[black] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center  sm:items-stretch sm:justify-between">
                <div
                  className="flex flex-shrink-0 items-center"
                  onClick={navigateToHome}
                >
                  <img className="block h-8 w-auto lg:hidden" src={logo} />
                  <img className="hidden h-8 w-auto lg:block" src={logo} />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "text-[#1B1212] hover:bg-[#2273FF] hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className=" shadow-md  text-[black] hover:bg-[blue] hover:text-white px-3  py-2 rounded-md text-sm font-medium"
                    onClick={navigateToSignInPage}
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
