import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import IntakePage from "./IntakePage.jsx";

function Root() {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "") || "";
  let path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (base && path.startsWith(base)) path = path.slice(base.length) || "/";
  if (path === "/intake") return <IntakePage />;
  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
