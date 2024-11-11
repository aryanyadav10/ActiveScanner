import React from 'react';

function Home() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-green-100">
      {/* Content */}
      <div className="relative z-10 text-center px-6 py-10">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Run Vulnerability Scans
        </h1>
        <h2 className="text-3xl font-light text-gray-500 mb-6">
          without the hassle
        </h2>
        <p className="text-gray-600 mb-8">
          Scan your websites, servers, networks, and APIs. View dashboards, get
          threat alerts, and generate audit-ready reports.
        </p>

        {/* Scan Input Box */}
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter a URL, IP address or hostname"
            className="p-4 border border-gray-300 rounded-l-lg w-80 focus:outline-none"
          />
          <button className="bg-green-500 text-white px-6 py-4 rounded-r-lg font-semibold hover:bg-green-600">
            Scan now →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
