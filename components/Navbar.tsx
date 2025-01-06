'use client'

import React from 'react';
import Image from "next/image";
import logo from "../public/assets/Group 629.svg";
import ConnectWallet from "@/components/Connectxion";
import { useAppContext } from '../contexts/AppContext';

const Navbar: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();

  return (
    <>
      <div className="h-1/4 p-10 hidden md:flex flex-row justify-between items-center">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="flex gap-8">
          <a href="https://fractit.com/" target="_blank" rel="noopener noreferrer">
            <p>HOME</p>
          </a>
          <a href="https://beta-testnet.fractit.com/" target="_blank" rel="noopener noreferrer">
            <p>PROPERTIES</p>
          </a>
          <a href="https://beta-testnet.fractit.com/reit" target="_blank" rel="noopener noreferrer">
            <p>REIT</p>
          </a>
          <a href="https://docs.fractit.com/" target="_blank" rel="noopener noreferrer">
            <p>DOCS</p>
          </a>
        </div>
        <div>
          <ConnectWallet />
        </div>
      </div>
      <div className="flex md:hidden items-center justify-between p-10">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="blue"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-4 bg-white/10 rounded-lg shadow-lg text-white">
          <a href="https://fractit.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200">
            HOME
          </a>
          <a href="https://beta-testnet.fractit.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200">
            PROPERTIES
          </a>
          <a href="https://beta-testnet.fractit.com/reit" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200">
            REIT
          </a>
          <a href="https://docs.fractit.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200">
            DOCS
          </a>
          <div className="block px-4 py-2">
            <ConnectWallet />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

