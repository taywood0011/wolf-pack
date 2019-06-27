import React from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

export default function   PackMember(props) {
  return (
    <Container>
      <Row>
        <Col sm="12" md="4" lg="3">
          <Card>
            <CardImg top src={props.userAvatar} alt={props.userName} onClick={props.clickHandler} job="view"/>
            <CardBody>
              <p>{props.username}</p>
              <hr></hr>
              <p>{props.location}</p>
            </CardBody>
          </Card>
        </Col>
        <Row></Row></Row>
        </Container>
  );
}

