import { useState, useEffect } from "react";

const Settings = ({ setDarkMode, darkMode }) => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded shadow max-w-md space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>

      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-900 dark:text-white">Dark Mode</span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)} // Toggling dark mode
          className="w-6 h-6"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-900 dark:text-white">Email Notifications</span>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
          className="w-6 h-6"
        />
      </div>

      <div>
        <h2 className="font-semibold mb-2 text-gray-900 dark:text-white">Business Info</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Business Name"
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            placeholder="Business Email"
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Settings;
