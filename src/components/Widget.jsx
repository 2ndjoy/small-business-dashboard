const Widget = ({ title, value }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default Widget;
