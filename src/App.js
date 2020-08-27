import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Header from "./components/header";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
