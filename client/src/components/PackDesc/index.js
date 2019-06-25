import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Container,
  } from "shards-react";


  function PackDesc(props) {
    return (
        <Container>
        <Card style={{ maxWidth: "500x" }}>
          <CardHeader>{props.pack.category}</CardHeader>
          <CardBody>
            <p>{props.pack.description}</p>
          </CardBody>
        </Card>
      </Container>
    );
  }


export default PackDesc;