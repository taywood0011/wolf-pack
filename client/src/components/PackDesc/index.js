import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Container,
    Button
  } from "shards-react";


  function PackDesc(props) {
    return (
        <Container>
        <Card style={{ maxWidth: "500x" }}>
          <CardHeader>{props.category}</CardHeader>
          <CardBody>
            <p>{props.description}</p>
            <Button className="pill-button" theme="info" size="sm" style={{ float: "right" }} onClick={props.clickHandler} job="edit">edit</Button>
          </CardBody>
        </Card>
      </Container>
    );
  }


export default PackDesc;