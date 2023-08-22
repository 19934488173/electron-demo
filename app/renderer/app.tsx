import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <div>这是 Electron + React </div>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
