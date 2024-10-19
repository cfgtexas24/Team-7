"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";
import LoginModal from "../Modals/LoginModal";

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-white shadow-md max-h-[10%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/stormcohs"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/stormcohs/"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://x.com/stormcohs"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Twitter size={18} />
            </Link>
          </div>
          <div className="hidden sm:flex space-x-6 text-sm text-gray-600">
            <span className="flex items-center space-x-2">
              <Phone size={16} />
              <span>469-431-3582</span>
            </span>
            <span className="flex items-center space-x-2">
              <Mail size={16} />
              <span>contact@stormcohs.org</span>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex-shrink-0">
            <img
              src="https://lirp.cdn-website.com/c61e8e49/dms3rep/multi/opt/Storm+Center+of+Hope+and+Service+Logo+F-01-234w.png"
              alt="Storm Center of Hope and Service Logo"
              className="h-12 w-auto"
            />
          </Link>

          <Button
            onClick={() => {
              openModal();
            }}
          >
            Login
          </Button>
          {isModalOpen && <LoginModal handleClose={closeModal} />}
        </div>
      </div>

    </nav>
  );
}
