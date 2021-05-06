import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Postform from "./components/Write/Postform";
import Authentication from "./components/Authentication/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/write" exact component={Postform} />
          <Route path="/signin" exact component={Authentication} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
