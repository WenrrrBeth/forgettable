import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Postform from "./components/Write/Postform";
import Authentication from "./components/Authentication/Authentication";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

function App() {

  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/write" exact component={Postform} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/authenticate" exact component={Authentication} />
          <Route path="/profile/settings" exact component={Settings} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
