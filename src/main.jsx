import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Views/NotFound/NotFound.jsx";
import Dashboard from "./Views/Dashboard/Dashboard.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { useState } from "react";
import { UserProvider } from "./data/UserProvider.jsx";

function Root() {
  const [ready, setReady] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <StrictMode>
      <BrowserRouter>
        {/* This UserProvider act like a redux store, helps access user data all across the app */}
        <UserProvider value={null}>
          <Navbar ready={ready} searchState={[searchValue, setSearchValue]} />
          <Routes>
            <Route
              path="/"
              element={
                // onReady tells navbar that dashboard is being shown and it can show search bar
                <Dashboard onReady={setReady} searchLiteral={searchValue} />
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
