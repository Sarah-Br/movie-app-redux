import React from "react";
import List from "./components/list";
import Search from "./components/search";
import { BrowserRouter as Router,Switch } from "react-router-dom";
import Description from "./description";
import "./App.css";


function App(props) {
  return (
    <div className="App">
      <Search />
      <Router>
        <List />
        <Switch><Router path="/movies-details/:id" component={Description} /></Switch>
      </Router>
    </div>
  );
}

export default App;
