import React from "react";
import { Container } from "shards-react";

function PackHeader(props) {
  return (
    <Container className="jumbotron">
          <img src={props.image} alt="packImage" />
          <h1> {props.title} </h1>
        </Container>
  );
}

export default PackHeader;


