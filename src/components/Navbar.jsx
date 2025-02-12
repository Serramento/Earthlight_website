import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DilarasLogo from "../images/DilarasLogo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/6 backdrop-blur-md z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="w-44 md:w-36">
              <img src={DilarasLogo} alt="DilarasLogo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div>
              <ul className="flex flex-row">
                <li>
                  <Link to="/hogar">
                    <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      HOGAR
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/sobreNosotros">
                    <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      SOBRE NOSOTROS
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/servicios">
                    <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      SERVICIOS
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/contacto">
                    <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      CONTACTO
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/hogar"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
            >
              HOGAR
            </Link>
            <Link
              href="/sobreNosotros"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
            >
              SOBRE NOSOTROS
            </Link>
            <Link
              href="/servicios"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
            >
              SERVICIOS
            </Link>
            <Link
              href="/contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
            >
              CONTACTO
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
