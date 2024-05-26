import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";
import GlobalStyle from "./styles/global";

const App = () => (
  <Router>
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);

export default App;
