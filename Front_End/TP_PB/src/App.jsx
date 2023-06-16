import { Route, Routes, NavLink } from "react-router-dom";
import { useState } from "react";
import { LC } from "./Home";
import { Login } from "./Login";
import "./App.css"; // Importe um arquivo CSS separado

export function App() {
  const [isUlVisible, setUlVisible] = useState(true);

  const handleLinkClick = () => {
    setUlVisible(false);
  };

  return (
    <>
      <nav className="nav-container">
        {isUlVisible && (
          <ul className="nav-links">
            <li>
              <NavLink to="/Home" onClick={handleLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Login" onClick={handleLinkClick}>
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </nav>

      <Routes>
        <Route path="/Home" element={<LC />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}