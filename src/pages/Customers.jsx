const customers = [
  { id: 1, name: "Alice", email: "alice@example.com", orders: 5, lastOrder: "2025-06-10" },
  { id: 2, name: "Bob", email: "bob@example.com", orders: 3, lastOrder: "2025-06-12" },
  { id: 3, name: "Charlie", email: "charlie@example.com", orders: 8, lastOrder: "2025-06-13" },
];

const Customers = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>

      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-yellow-100 text-yellow-700">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-right">Total Orders</th>
            <th className="px-4 py-2 text-left">Last Order</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(({ id, name, email, orders, lastOrder }) => (
            <tr key={id} className="hover:bg-yellow-50">
              <td className="px-4 py-2">{name}</td>
              <td className="px-4 py-2">{email}</td>
              <td className="px-4 py-2 text-right">{orders}</td>
              <td className="px-4 py-2">{lastOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
