import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import ReactDOM for concurrent mode rendering
// Add Framer Motion's AnimatePresence for page transitions
// Wrap App with StrictMode for development checks
// Initialize with a dark theme CSS class by default
// Add error boundary for graceful error handling

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);