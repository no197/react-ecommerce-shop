import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => <h1>HATS PAGE</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
