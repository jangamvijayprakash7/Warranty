"use client";

import { useState } from "react";
import { Plus,  Calendar } from "lucide-react";

interface Warranty {
  id: number;
  productName: string;
  category: string;
  expiryDate: string;
}

export default function WarrantyCards() {
  const [warranties, setWarranties] = useState<Warranty[]>([
    {
      id: 1,
      productName: "Laptop",
      category: "Electronics",
      expiryDate: "2026-05-20",
    },
    {
      id: 2,
      productName: "Washing Machine",
      category: "Appliances",
      expiryDate: "2027-01-12",
    },
  ]);

  const addWarranty = () => {
    const newWarranty: Warranty = {
      id: Date.now(),
      productName: "New Product",
      category: "Others",
      expiryDate: "2026-12-31",
    };
    setWarranties([...warranties, newWarranty]);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">My Warranty Receipts</h1>
        <button
          onClick={addWarranty}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          <Plus size={18} /> Add Warranty
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {warranties.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-5 border hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              
              <h2 className="text-lg font-semibold">{item.productName}</h2>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              Category: <span className="font-medium">{item.category}</span>
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar size={16} />
              Expires on:
              <span className="font-medium">{item.expiryDate}</span>
            </div>

            <div className="flex gap-3 mt-5">
              <button className="flex-1 text-sm bg-gray-100 py-2 rounded-lg hover:bg-gray-200">
                View
              </button>
              <button className="flex-1 text-sm bg-red-100 text-red-600 py-2 rounded-lg hover:bg-red-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
