import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LittersPage from "./litters/LittersPage";
import LitterPage from "./litters/LitterPage";
import KittensPage from "./kittens/KittensPage";
import KittenPage from "./kittens/KittenPage";
import ManageKittenPage from "./kittens/ManageKittenPage";
import ManageLitterPage from "./litters/ManageLitterPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={LittersPage} />
        <Route path="/litter/:id" component={ManageLitterPage} />
        <Route path="/litter" component={ManageLitterPage} />
        <Route path="/kittens" component={KittensPage} />
        <Route path="/kitten/:id" component={ManageKittenPage} />
        <Route path="/kitten" component={ManageKittenPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
