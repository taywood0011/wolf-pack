import React from "react";
import NavComponent from "./components/NavComponent";
import ItemCard from "./components/ItemCard";
import FooterComponent from "./components/FooterComponent";
import { Container } from "shards-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavComponent />
      <Switch>
        <Route exact path="/" render={() => <Tundra display="home" />} />
        <Route exact path="/howls" render={() => <Tundra display="howls" />} />
        <Route
          exact
          path="/groups"
          render={() => <Tundra display="groups" />}
        />
        <Route component={NoMatch} />
      </Switch>
      <FooterComponent cards="false" />
    </Router>
  );
}

export default App; /*
 
//Card display JSX

/*
<Container>

  /* Howl Example */ /*
 <ItemCard
    img=""
    title="Looking for group!!!1!"
    body="ISO an airbud/electro-swing fan group. Both would be ideal, but either would work."
    clickFn={function() {
      // invite()
      this.toggle();
    }}
  />

  /* Group ad Example */ /*
  <ItemCard
    img=""
    title="Forming Electro-Swing Band"
    body="We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!"
    clickFn={function() {
      // joinGroup
      this.toggle();
    }}
  />
</Container>
*/
