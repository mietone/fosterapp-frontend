import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LittersPage from "./litters/LittersPage";
import LitterPage from "./litters/LitterPage";
import KittensPage from "./kittens/KittensPage";
import ManageKittenPage from "./kittens/ManageKittenPage";
import ManageLitterPage from "./litters/ManageLitterPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={LittersPage} />
        <Route path="/litter/:id/page" component={LitterPage} />
        <Route path="/litter/:id" component={ManageLitterPage} />
        <Route path="/litter" component={ManageLitterPage} />
        <Route path="/kittens" component={KittensPage} />
        <Route path="/kitten" component={ManageKittenPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
