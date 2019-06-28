import React from "react";
import { Container } from "shards-react";

function PackHeader(props) {

  
  return (

    <Container className="jumbotron">
          <h1> Welcome to {props.title}! </h1>
        </Container>
  );
}

export default PackHeader;


