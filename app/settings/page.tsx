"use client";

import { useState } from "react";

export default function SettingsPage() {
    console.log("Settings Page Rendered");

    // Profile State
    const [name, setName] = useState("Adityavarma");
    const [email, setEmail] = useState("adityavarma1498@gmail.com");
    const [phone, setPhone] = useState("7013446701");

    // Account State
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Notification State
    const [emailReminders, setEmailReminders] = useState(true);

    // App Preferences State
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("English");

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-500 mb-8">Manage your profile and account preferences</p>

            <div className="space-y-6">
                {/* Profile Settings */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-2xl font-bold border-2 border-dashed border-gray-300">
                                {name.charAt(0)}
                            </div>
                            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
                                Change Picture
                            </button>
                        </div>
                        <div className="flex-1 w-full space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div className="pt-2">
                                <button
                                    onClick={() => alert("Profile changes saved!")}
                                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Settings */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                    <div className="max-w-md space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <input
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <button
                                onClick={() => alert("Password updated!")}
                                className="px-6 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Save Password
                            </button>
                            <button
                                onClick={() => alert("Logged out!")}
                                className="text-red-600 font-medium hover:text-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Settings</h2>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-900">Email Reminders</p>
                            <p className="text-sm text-gray-500">Receive notifications when warranties are about to expire</p>
                        </div>
                        <button
                            onClick={() => setEmailReminders(!emailReminders)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${emailReminders ? 'bg-blue-600' : 'bg-gray-200'
                                }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailReminders ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                    </div>
                </div>

                {/* App Preferences */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">App Preferences</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                            <div className="flex bg-gray-100 p-1 rounded-lg">
                                <button
                                    onClick={() => setTheme("light")}
                                    className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${theme === "light" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    Light
                                </button>
                                <button
                                    onClick={() => setTheme("dark")}
                                    className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${theme === "dark" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    Dark
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                            >
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Telugu">Telugu</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
