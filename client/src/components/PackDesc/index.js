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
          <CardHeader>{props.category}</CardHeader>
          <CardBody>
            <p>{props.description}</p>
          </CardBody>
        </Card>
      </Container>
    );
  }


export default PackDesc;