"use client";

import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut, CircleUser } from "lucide-react";
import Link from "next/link";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <CircleUser className="w-10 h-10 text-gray-700" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-50 h-50 bg-white border rounded-lg shadow-lg space-y-2">
          <Link
            href="/profile"
            className="flex items-center gap-2 px-6 py-4 hover:bg-gray-100"
          >
            <User /> Profile
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-2 px-6 py-4 hover:bg-gray-100"
          >
            <Settings /> Settings
          </Link>

          <button className="w-full flex items-center gap-2 px-6 py-4 text-red-600 hover:bg-gray-100">
            <LogOut /> Logout
          </button>
        </div>
      )}
    </div>
  );
}
