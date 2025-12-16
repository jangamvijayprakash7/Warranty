"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

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
          <Link href="/about" className="text-gray-700 font-bold text-xl hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 font-bold text-xl hover:text-blue-600">
            Contact
          </Link>
          <Link href="/privacy-policy" className="text-gray-700 font-bold text-xl hover:text-blue-600">
            Privacy Policy
          </Link>
        </div>

        {/* Middle Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 mx-8 max-w-md">
          
          <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={18} />
      <input
        type="text"
        placeholder="Search warranties..."
        className="w-full rounded-xl border py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          <Link
            href="/Login"
           className="px-4 py-2 rounded-full bg-blue-600 font-bold text-white hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
