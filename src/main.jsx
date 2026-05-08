import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import IntakePage from "./IntakePage.jsx";
import BookPage from "./BookPage.jsx";
import BookedPage from "./BookedPage.jsx";

const basename = (import.meta.env.BASE_URL || "/").replace(/\/$/, "") || "/";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/book" element={<BookPage />} />
        <Route path="/booked" element={<BookedPage />} />
        <Route path="/intake" element={<IntakePage />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
