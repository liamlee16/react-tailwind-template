import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import RouterConfig from "./Router";

function App() {
  return (
    <Router>
      <div>
        <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
          <div className="flex items-start justify-between">
            <Sidebar />
            <div className="flex flex-col w-full space-y-4">
              <div className="h-screen overflow-y-auto p-4 pt-0">
                <Navbar />
                {/* <Dashboard /> */}
                <RouterConfig />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
