import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import RedirectPage from "./RedirectPage.tsx";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/redirect" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
