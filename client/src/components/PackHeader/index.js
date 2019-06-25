import React from "react";
import { Container } from "shards-react";

function PackHeader(props) {
  return (
    <Container className="jumbotron">
          <img src={props.pack.image} alt="packImage" />
          <h1> {props.pack.title} </h1>
        </Container>
  );
}

export default PackHeader;


