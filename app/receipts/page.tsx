"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddReceiptPage() {
  const router = useRouter();

  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [warrantyDuration, setWarrantyDuration] = useState<number>(12);
  const [expiryDate, setExpiryDate] = useState("");
  const [receipt, setReceipt] = useState<File | null>(null);
  const [notes, setNotes] = useState("");

  // Auto-calculate expiry date
  const calculateExpiryDate = (date: string, months: number) => {
    if (!date) return "";
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    return d.toISOString().split("T")[0];
  };

  const handlePurchaseDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setPurchaseDate(date);
    setExpiryDate(calculateExpiryDate(date, warrantyDuration));
  };

  const handleWarrantyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const months = Number(e.target.value);
    setWarrantyDuration(months);
    setExpiryDate(calculateExpiryDate(purchaseDate, months));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      productName,
      brand,
      purchaseDate,
      warrantyDuration,
      expiryDate,
      receipt,
      notes,
    };

    console.log("Saved Data:", formData);

    // Later: send this data to backend API
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSave}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h1 className="text-2xl font-semibold mb-6">Add Receipt / Warranty</h1>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="Eg: HP Laptop"
          />
        </div>

        {/* Brand */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Eg: HP"
          />
        </div>

        {/* Purchase Date */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Purchase Date</label>
          <input
            type="date"
            value={purchaseDate}
            onChange={handlePurchaseDateChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Warranty Duration */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Warranty Duration</label>
          <select
            value={warrantyDuration}
            onChange={handleWarrantyChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value={6}>6 Months</option>
            <option value={12}>1 Year</option>
            <option value={24}>2 Years</option>
            <option value={36}>3 Years</option>
          </select>
        </div>

        {/* Warranty Expiry Date */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Warranty Expiry Date</label>
          <input
            type="date"
            value={expiryDate}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        {/* Upload Receipt */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Upload Receipt</label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => setReceipt(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            rows={3}
            placeholder="Additional details..."
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 rounded bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
