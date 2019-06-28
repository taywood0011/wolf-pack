import React from "react";
import { Card, CardBody, CardHeader, Container } from "shards-react";

function PackDesc(props) {
  return (
    <Container className="pack-description-container">
      <Card style={{ minWidth: "100%" }}>
        <CardHeader>Pack Description
        <img className="pack-image" src={props.image} alt="packImage" />
        </CardHeader>
        <CardBody>
          <p>{props.description}</p>
        </CardBody>
      </Card>
    </Container>
  );
}

export default PackDesc;
