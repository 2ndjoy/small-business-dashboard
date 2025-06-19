const orders = [
  { id: "001", customer: "Alice", status: "Delivered", amount: "$150", date: "2025-06-10" },
  { id: "002", customer: "Bob", status: "Pending", amount: "$250", date: "2025-06-12" },
  { id: "003", customer: "Charlie", status: "Cancelled", amount: "$100", date: "2025-06-13" },
];

const Orders = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-indigo-100 text-indigo-700">
          <tr>
            <th className="px-4 py-2 text-left">Order ID</th>
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-right">Amount</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(({ id, customer, status, amount, date }) => (
            <tr key={id} className="hover:bg-indigo-50">
              <td className="px-4 py-2">{id}</td>
              <td className="px-4 py-2">{customer}</td>
              <td className={`px-4 py-2 font-semibold ${status === "Delivered" ? "text-green-600" : status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                {status}
              </td>
              <td className="px-4 py-2 text-right">{amount}</td>
              <td className="px-4 py-2">{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
