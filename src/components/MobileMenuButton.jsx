// src/components/MobileMenuButton.jsx
import React from "react";
import { Menu } from "lucide-react";

const MobileMenuButton = ({ toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="fixed top-4 left-4 z-20 lg:hidden bg-gray-900 text-white p-2 rounded-md"
    >
      <Menu size={24} />
    </button>
  );
};

export default MobileMenuButton;
