import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Views/NotFound/NotFound.jsx";
import Dashboard from "./Views/Dashboard/Dashboard.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { useState } from "react";
import { UserProvider } from "./data/UserProvider.jsx";
import "./index.css";

function Root() {
  const [ready, setReady] = useState(false);
  const [searchData, setSearchData] = useState("");

  return (
    <StrictMode>
      <BrowserRouter>
        {/* This UserProvider act like a redux store, helps access user data all across the app */}
        <UserProvider value={null}>
          <Navbar ready={ready} searchState={[searchData, setSearchData]} />
          <Routes>
            <Route
              path="/"
              element={
                // onReady tells navbar that dashboard is being shown and it can show search bar
                <Dashboard onReady={setReady} searchData={searchData} />
              }
            />
            {/* Catchall path */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
