import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white p-4 mb-4 rounded shadow-sm flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      {/* Dropdown menu button for mobile */}
      <div className="lg:hidden">
        <button
          className="text-gray-700 p-2 rounded-md"
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
          <div className="absolute top-14 right-4 bg-white shadow-lg rounded-lg w-40 p-4">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop navigation */}
      <div className="hidden lg:flex space-x-4">
        <Link to="/" className="text-gray-700">Dashboard</Link>
        <Link to="/orders" className="text-gray-700">Orders</Link>
        <Link to="/profile" className="text-gray-700">Profile</Link>
        <Link to="/reports" className="text-gray-700">Reports</Link>
        <Link to="/settings" className="text-gray-700">Settings</Link>
      </div>
    </div>
  );
};

export default Header;
