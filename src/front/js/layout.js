import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Login} from "./pages/Login";
import injectContext from "./store/appContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <>
      <BrowserRouter basename={basename}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route>
            <h1>Not found! c:</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default injectContext(Layout);
