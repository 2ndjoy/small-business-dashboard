import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-6 bg-white rounded shadow max-w-md space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="flex items-center justify-between">
        <span className="font-semibold">Dark Mode</span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="w-6 h-6"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="font-semibold">Email Notifications</span>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
          className="w-6 h-6"
        />
      </div>

      <div>
        <h2 className="font-semibold mb-2">Business Info</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Business Name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Business Email"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Settings;
