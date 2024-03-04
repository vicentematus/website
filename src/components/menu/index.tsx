import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "src/utils/menu";

const HeaderSection = () => {
  return (
    <Disclosure as="nav" className="fixed z-50 w-full bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex flex-shrink-0 items-center text-slate-100">
                  <Image
                    src={`/img/clippy.gif`}
                    height={50}
                    width={50}
                    alt="Pagina personal de Vicente Matus"
                  />
                  <p className="ml-2 font-display text-lg font-bold">
                    Vicente Matus
                  </p>
                </div>
                <div className="hidden font-display sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((element, index) => (
                      <Link
                        key={index}
                        href={element.href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
                      >
                        {element.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 bg-slate-900 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

              {navigation.map((element, index) => (
                <Link
                  href={element.href}
                  key={index}
                  className="block
                    rounded-md  bg-slate-600 px-3 py-2 font-display text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white
                    "
                >
                  {element.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default HeaderSection;
