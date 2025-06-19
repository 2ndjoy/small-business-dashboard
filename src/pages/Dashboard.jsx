import { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const chartRef = useRef(null);

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "#4F46E5",
        data: [1200, 1900, 3000, 2500, 3200, 4000],
      },
    ],
  };

  useEffect(() => {
    // Cleanup on unmount or when data changes
    const chart = chartRef.current.chartInstance;
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Chart Section */}
      <div className="bg-gray-50 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
        <Bar ref={chartRef} data={salesData} />
      </div>
    </div>
  );
};

export default Dashboard;
