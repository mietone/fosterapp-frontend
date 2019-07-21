import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LittersPage from "./litters/LittersPage";
import LitterPage from "./litters/LitterPage";
import LitterForm from "./litters/LitterForm";
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
        <Route path="/kitten/:id/edit" component={ManageKittenPage} />
        <Route path="/kitten/:id" component={KittenPage} />
        <Route path="/kittens" component={KittensPage} />
        <Route path="/litter/:id/edit" component={ManageLitterPage} />
        <Route path="/litter/:id" component={LitterPage} />
        <Route path="/litter/new" component={LitterForm} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
