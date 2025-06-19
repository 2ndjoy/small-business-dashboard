import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = ({ setDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <div className="lg:hidden bg-white dark:bg-gray-800 p-4 mb-4 rounded shadow-sm flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        {user && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Logged in as: <span className="font-medium">{user.email}</span>
          </p>
        )}
      </div>

      <div className="flex space-x-2 items-center">
        <button
          className="text-gray-700 dark:text-white p-2 rounded-md"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <span className="text-2xl">🌙</span> : <span className="text-2xl">🌞</span>}
        </button>

        <button
          className="text-gray-700 dark:text-white p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <span className="text-2xl">&times;</span> : <span className="text-2xl">&#9776;</span>}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-14 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-40 p-4">
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
            <li><Link to="/orders" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>Orders</Link></li>
            <li><Link to="/customers" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>Customers</Link></li>
            <li><Link to="/profile" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>Profile</Link></li>
            <li><Link to="/reports" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>Reports</Link></li>
            <li><Link to="/settings" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>Settings</Link></li>
          <li> {user?<p>Logout </p>:<p>Login</p>}</li>
          </ul>
        </div>
      )}

      <div className="hidden lg:flex space-x-4">
        <Link to="/" className="text-gray-700 dark:text-white">Dashboard</Link>
        <Link to="/orders" className="text-gray-700 dark:text-white">Orders</Link>
        <Link to="/customers" className="text-gray-700 dark:text-white">Customers</Link>
        <Link to="/profile" className="text-gray-700 dark:text-white">Profile</Link>
        <Link to="/reports" className="text-gray-700 dark:text-white">Reports</Link>
        <Link to="/settings" className="text-gray-700 dark:text-white">Settings</Link>
      </div>
    </div>
  );
};

export default Header;
