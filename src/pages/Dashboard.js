import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <ul>
          <li className="mb-6"><a href="#" className="text-lg">Dashboard</a></li>
          <li className="mb-6"><a href="#" className="text-lg">Profile</a></li>
          <li><a href="#" className="text-lg">Settings</a></li>
        </ul>
      </aside>
      <main className="flex-grow p-6 bg-gray-100">
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="text-right">
            <span className="mr-4">User Name</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
          </div>
        </header>
        <section>
          <p className="text-gray-700">Main content goes here...</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
