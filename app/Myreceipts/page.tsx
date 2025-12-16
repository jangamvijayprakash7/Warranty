"use client";

import { useState } from "react";

// Receipt type
interface Receipt {
  id: number;
  productName: string;
  brand: string;
  category: "Electronics" | "Appliances" | "Furniture" | "Other";
  expiryDate: string;
  status: "Active" | "Expired";
  receiptUrl: string;
}

// Sample data
const receiptsData: Receipt[] = [
  {
    id: 1,
    productName: "HP Laptop",
    brand: "HP",
    category: "Electronics",
    expiryDate: "2026-05-10",
    status: "Active",
    receiptUrl: "/sample.pdf",
  },
  {
    id: 2,
    productName: "LG Refrigerator",
    brand: "LG",
    category: "Appliances",
    expiryDate: "2024-02-01",
    status: "Expired",
    receiptUrl: "/sample.pdf",
  },
];

export default function MyReceiptsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filteredReceipts = receiptsData.filter((receipt) => {
    const categoryMatch =
      categoryFilter === "All" || receipt.category === categoryFilter;
    const statusMatch =
      statusFilter === "All" || receipt.status === statusFilter;

    return categoryMatch && statusMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-6">My Receipts</h1>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Appliances">Appliances</option>
            <option value="Furniture">Furniture</option>
            <option value="Other">Other</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="All">All Warranties</option>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
          </select>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Product</th>
                <th className="p-3 border">Brand</th>
                <th className="p-3 border">Category</th>
                <th className="p-3 border">Expiry Date</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReceipts.map((receipt) => (
                <tr key={receipt.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{receipt.productName}</td>
                  <td className="p-3 border">{receipt.brand}</td>
                  <td className="p-3 border">{receipt.category}</td>
                  <td className="p-3 border">{receipt.expiryDate}</td>
                  <td
                    className={`p-3 border font-medium ${{
                      Active: "text-green-600",
                      Expired: "text-red-600",
                    }[receipt.status]}`}
                  >
                    {receipt.status}
                  </td>
                  <td className="p-3 border">
                    <div className="flex gap-2">
                      <button className="text-blue-600">View</button>
                      <button className="text-yellow-600">Edit</button>
                      <button className="text-red-600">Delete</button>
                      <a
                        href={receipt.receiptUrl}
                        download
                        className="text-green-600"
                      >
                        Download
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredReceipts.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No receipts found
          </p>
        )}
      </div>
    </div>
  );
}
