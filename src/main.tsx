import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
