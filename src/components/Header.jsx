import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setDarkMode, darkMode }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
   <div className="lg:hidden bg-white dark:bg-gray-800 p-4 mb-4 rounded shadow-sm flex justify-between items-center">   <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
 {/* Dark Mode Toggle Button */}
      <div className="lg:hidden">
        <button
          className="text-gray-700 dark:text-white p-2 rounded-md"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <span className="text-2xl">🌙</span> // Moon icon for dark mode
          ) : (
            <span className="text-2xl">🌞</span> // Sun icon for light mode
          )}
        </button>
      </div>

      {/* Dropdown menu button for mobile */}
      <div className="lg:hidden">
        <button
          className="text-gray-700 dark:text-white p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="text-2xl">&times;</span> // Close icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon
          )}
        </button>

        {/* Dropdown menu for mobile */}
        {isMenuOpen && (
          <div className="absolute top-14 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-40 p-4">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>
                  Orders
                </Link>
              </li>
              
              <li>
                <Link to="/customers" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>
                  Customers
                </Link>
              </li>
              
              <li>
                <Link to="/profile" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop navigation */}
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
