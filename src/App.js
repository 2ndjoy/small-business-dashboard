import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { useState, useEffect } from "react";

function App() {
  // Check if dark mode is stored in localStorage, default to false if not
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings setDarkMode={setDarkMode} darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
