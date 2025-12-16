"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-gray-700 font-bold text-xl hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 font-bold text-xl hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            className="text-gray-700 font-bold text-xl hover:text-blue-600"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Middle Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 mx-8 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search receipts, products..."
            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full bg-blue-600 font-bold text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 rounded-full border font-bold border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
