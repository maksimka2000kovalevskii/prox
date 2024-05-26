import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";
import GlobalStyle from "./styles/global";

const App = () => (
  <Router>
    <GlobalStyle />
    <Navbar />
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/logs" component={Logs} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </Router>
);

export default App;
