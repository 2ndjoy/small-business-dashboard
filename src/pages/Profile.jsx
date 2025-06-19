const Profile = () => {
  return (
    <div className="p-6 bg-white rounded shadow max-w-md">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">Name</label>
          <input id="name" type="text" defaultValue="John Doe" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" defaultValue="john.doe@example.com" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="role">Role</label>
          <input id="role" type="text" defaultValue="Admin" disabled className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100" />
        </div>

        <button type="submit" className="bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
