import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Views/Dashboard/Dashboard.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { useState } from "react";
import UserProvider from "./data/UserProvider.jsx";
import "./index.css";
import User from "./Views/User/User.jsx";
import EmptyState from "./Components/EmptyState/EmptyState.jsx";
import AddUser from "./Views/AddUser/AddUser.jsx";

function Root() {
  const [searchData, setSearchData] = useState("");

  return (
    <StrictMode>
      <BrowserRouter>
        {/* This UserProvider act like a redux store, helps access user data all across the app */}
        <UserProvider value={null}>
          {/* this provides the currentSelected user context */}
          <Navbar searchState={[searchData, setSearchData]} />
          <Routes>
            <Route path="/" element={<Dashboard searchData={searchData} />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="add-user" element={<AddUser />} />
            {/* Catchall path */}
            <Route
              path="*"
              element={
                <EmptyState
                  image="/Error Icon.png"
                  alt="Error"
                  message="Something went wrong"
                  messageClass="text-red-600"
                />
              }
            />
            <Route
              path="/error"
              element={
                <EmptyState
                  image="/Error Icon.png"
                  alt="Error"
                  message="Something went wrong"
                  messageClass="text-red-600"
                />
              }
            />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
const loader = document.getElementById("global-loader");
if (loader) loader.style.display = "none";
