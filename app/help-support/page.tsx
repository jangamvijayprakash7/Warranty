"use client";

import React from 'react';

export default function HelpSupportPage() {
    console.log("Help & Support Page Rendered");

    const supportOptions = [
        {
            title: "FAQs",
            description: "Find answers to common questions",
            icon: "❓",
        },
        {
            title: "Contact Support",
            description: "Reach out to our support team",
            icon: "📞",
        },
        {
            title: "Warranty Help",
            description: "Issues related to warranties & expiry",
            icon: "🛡️",
        },
        {
            title: "Technical Support",
            description: "App or technical issues",
            icon: "⚙️",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
                <p className="text-gray-500">We’re here to help you with anything related to your account</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - Support Options */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {supportOptions.map((option, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                                <div className="text-4xl mb-4">{option.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                                <p className="text-sm text-gray-500">{option.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Us Directly</h2>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-xl">
                                    ✉️
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 mb-1">Email Support</p>
                                    <p className="text-gray-900 font-medium">support@slipcrate.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-xl">
                                    📱
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 mb-1">Phone Support</p>
                                    <p className="text-gray-900 font-medium">+91 90000 00000</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <p className="text-sm text-gray-500 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                We usually respond within 24 hours
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Illustration Section */}
                <div className="lg:col-span-1">
                    <div className="bg-blue-50 rounded-xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px] border border-blue-100">
                        <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center mb-6 text-4xl text-blue-500">
                            🤝
                        </div>
                        <h3 className="text-lg font-bold text-blue-900 mb-2">Support Illustration</h3>
                        <p className="text-sm text-blue-700">
                            Our team is dedicated to providing you with the best experience possible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
