import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import LittersPage from "./litters/LittersPage";
import LitterPage from "./litters/LitterPage";
import LitterForm from "./litters/LitterForm";
import KittenPage from "./kittens/KittenPage";
import Header from "./common/Header";
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path='/' component={LittersPage} />
        <Route path='/litter/new' component={LitterForm} />
        <Route path='/litter/:id' component={LitterPage} />
        <Route path='/kitten/:id' component={KittenPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
