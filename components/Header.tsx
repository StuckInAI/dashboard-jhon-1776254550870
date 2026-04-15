'use client';

import { useState } from 'react';
import { Search, Bell, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-white border-b border-purple-100 px-6 py-4 flex items-center justify-between gap-4">
      {/* Title */}
      <div>
        <h1 className="text-xl font-bold text-violet-900">Dashboard Overview</h1>
        <p className="text-sm text-violet-400">{today}</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 bg-purple-50 rounded-lg text-sm text-violet-700 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-56"
          />
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-600 transition-colors"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-600 transition-colors">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full"></span>
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm cursor-pointer">
          JD
        </div>
      </div>
    </header>
  );
}
