import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation"

function App() {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navigation />
      </Container>
    </BrowserRouter>
  );
}

export default App;
