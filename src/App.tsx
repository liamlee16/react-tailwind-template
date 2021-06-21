import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full p-4 pt-0 space-y-4">
            <Navbar />
            <Dashboard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
