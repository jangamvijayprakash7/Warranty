export default function Header() {
    return (
        <header className="flex items-center justify-between py-6 mb-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    {/* Placeholder for user image */}
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold">JD</div>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Good Night</p>
                    <h2 className="text-lg font-bold text-gray-900">John Doe</h2>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </button>
            </div>
        </header>
    );
}
