import React from "react";
import NavComponent from "./components/NavComponent";
import ItemCard from "./components/ItemCard";
import FooterComponent from "./components/FooterComponent";
import { Container } from "shards-react";

function App() {
  return (
    <>
      <NavComponent />

      {/*TODO: Force footer to bottom when page is empty without making it block cards when page is no longer empty*/}
      <FooterComponent cards="false"/>
    </>
  );
}

export default App;


//Card display JSX

/*
<Container>
  <ItemCard
    img=""
    title="Looking for group!!!1!"
    body="ISO an airbud/electro-swing fan group. Both would be ideal, but either would work."
    clickFn={function() {
      // joinGroup || invite()
      this.toggle();
    }}
  />
  <ItemCard
    img=""
    title="Looking for group!!!1!"
    body="ISO an airbud/electro-swing fan group. Both would be ideal, but either would work."
    clickFn={function() {
      // joinGroup || invite()
      this.toggle();
    }}
  />
  <ItemCard
    img=""
    title="Looking for group!!!1!"
    body="ISO an airbud/electro-swing fan group. Both would be ideal, but either would work."
    clickFn={function() {
      // joinGroup || invite()
      this.toggle();
    }}
  />
</Container>
*/