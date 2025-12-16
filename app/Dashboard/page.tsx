"use client";

import { Bell, Calendar, CheckCircle, Clock, Plus, XCircle } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      label: "Total Items",
      value: 12,
      icon: Clock,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      label: "Active",
      value: 8,
      icon: CheckCircle,
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Expiring",
      value: 3,
      icon: Clock,
      color: "bg-orange-50 text-orange-600",
    },
    {
      label: "Expired",
      value: 1,
      icon: XCircle,
      color: "bg-red-50 text-red-600",
    },
  ];

  const warranties = [
    {
      name: 'MacBook Pro 14"',
      expiry: "Expiring in 1 month",
      status: "Expiring",
    },
    {
      name: "Sony WH‑1000XM5 Headphones",
      expiry: "Expiring on Nov 21, 2025",
      status: "Active",
    },
    {
      name: "iPhone 15 Pro Max",
      expiry: "Expiring on Mar 21, 2026",
      status: "Active",
    },
    {
      name: "Samsung 4K Smart TV",
      expiry: "Expiring in 1 week",
      status: "Expiring",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Welcome! 👋</h1>
        <p className="text-slate-500">Here’s your warranty overview</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-2xl bg-white p-4 shadow-sm">
            <div
              className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}
            >
              <stat.icon size={18} />
            </div>
            <p className="text-xl font-bold">{stat.value}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Warranties */}
        <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Warranties</h2>
            <button className="text-sm text-indigo-600">View All</button>
          </div>

          <div className="space-y-3">
            {warranties.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border p-3"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.expiry}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white">
            <Plus size={16} /> Add New Warranty
          </button>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          {/* Expiring Card */}
          <div className="rounded-2xl bg-orange-50 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <Bell size={18} />
            </div>
            <h3 className="font-semibold">3 Warranties Expiring Soon</h3>
            <p className="mt-1 text-sm text-slate-600">
              Review and manage your expiring warranties before they expire.
            </p>
            <button className="mt-4 w-full rounded-xl bg-orange-600 py-2 text-sm text-white">
              View Expiring Warranties
            </button>
          </div>

          {/* Calendar Sync */}
          <div className="rounded-2xl bg-blue-100 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Calendar size={18} />
            </div>
            <h3 className="font-semibold">Calendar Sync</h3>
            <p className="mt-1 text-sm text-green-600">● Calendar Connected</p>
            <p className="mt-2 text-sm text-slate-600">
              Ready to sync your warranties with Google Calendar
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Last synced: 22/09/2025, 02:45
            </p>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-xl bg-indigo-600 py-2 text-sm text-white">
                Sync Warranties
              </button>
              <button className="flex-1 rounded-xl border py-2 text-sm">
                Disconnect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
