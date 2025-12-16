"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CircleUser,
  Power,
  House,
  Settings,
  Plus,
  Handbag,
} from "lucide-react";
import DashboardPage from "./Dashboard/page";

const navItems = [
  { name: "Dashboard", icon: House, href: "/" },
  { name: "Add warranty", icon: Plus, href: "/courses" },
  { name: "Purchases", icon: Handbag, href: "/students" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div>
      {/* Top navbar */}
      {/*Search bar */}
      <div className="fixed pl-130 border-b border-gray-500 top-0 w-full p-5 bg-blue-100 h-20">
        <div className=" flex gap-32 ">
          <form onSubmit={handleSearch} className="flex h-12">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search receipts, products..."
              className="border border-gray-500 pl-6 w-150 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
          <div className="flex gap-12 place-self-center">
            <Link
              href="/About"
              className="text-gray-700 font-bold text-xl hover:text-blue-500"
            >
              About-Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 font-bold text-xl hover:text-blue-500"
            >
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-700 font-bold text-xl hover:text-blue-500"
            >
              Privacy Policy
            </Link>
          </div>
          <CircleUser className="w-12 h-12 ml-10" />
        </div>
      </div>
      {/* Side navbar */}
      <aside className="w-70 h-screen fixed bg-white left-0 top-0 rounded-br-2xl  ">
        <div className="p-6 h-20 text-blue-600 text-3xl font-bold border-b bg-blue-100 border-gray-700">
          My App
        </div>
        <ul>
          {navItems.map((items) => {
            const Icon = items.icon;
            return (
              <Link key={items.name} href={items.href}>
                <li className="flex gap-3 hover:bg-blue-600 hover:text-white text-xl px-6 py-4  space-y-3">
                  <Icon />
                  {items.name}
                </li>
              </Link>
            );
          })}
        </ul>
        {/*Log-out button */}
        <button className="flex items-center justify-center font-bold gap-3 text-white fixed bottom-0 w-70 h-15 text-lg bg-blue-600 hover:bg-blue-500">
          <Power className="w-8 h-8" /> Log out
        </button>
      </aside>
      <div className="ml-70 mt-20 fixed w-410">
        <DashboardPage />
      </div>
    </div>
  );
}
