import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Views/NotFound/NotFound.jsx";
import Dashboard from "./Views/Dashboard/Dashboard.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { useState } from "react";

function Root() {
  const [ready, setReady] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar ready={ready} searchState={[searchValue, setSearchValue]} />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard onReady={setReady} searchLiteral={searchValue} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
