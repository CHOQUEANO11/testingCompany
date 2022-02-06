import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ListMessage from "./pages/ListMessage";
import SaveList from "./pages/SaveList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/list-message" exact component={ListMessage} />
      <Route path="/save-list" exact component={SaveList} />
    </BrowserRouter>
  );
};

export default Routes;
