import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="flex flex-col gap-2 h-screen overflow-hidden p-2">
    <BrowserRouter>
      <App />
      <Outlet />
    </BrowserRouter>
  </div>
);
