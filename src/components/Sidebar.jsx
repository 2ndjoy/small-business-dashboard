import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`lg:w-64 w-full bg-white h-screen shadow-md p-4 ${isOpen ? "block" : "hidden"} lg:block`}>
      <h2 className="text-xl font-bold mb-6">SmallBiz Admin</h2>
      <ul className="space-y-4">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>

      <button
        className="lg:hidden fixed top-4 right-4 bg-blue-500 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"} Menu
      </button>
    </div>
  );
};

export default Sidebar;
