import React from "react";

import { Container } from "shards-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Row,
  ListGroup,
  ListGroupItem,
  FormTextarea
} from "shards-react";
import PackMember from "../PackMember"

class NewPackPage extends React.Component {
  state = {
    image: "http://placekitten.com/300/300",
    packName: "PacknameExample",
    packMember: [
        {
            name: "username1",
            location: "location",
            packMemberImg: "http://placekitten.com/300/300",
            _id: "13456"
        }
    ]
  };

  render() {
    return (
      <>
        <Container className="jumbotron">
          <img src={this.state.image} alt="packImage" />
          <h1> {this.state.packName} </h1>
        </Container>
        <Container>
          <Card style={{ maxWidth: "300px" }}>
            <CardHeader>Category</CardHeader>
            <CardBody>
              <p>Short Description.</p>
            </CardBody>
          </Card>
        </Container>
        <Container>
        <Row>
          {this.state.packMember.map(packMember => (
            <PackMember key={packMember._id} {...packMember} />
          ))}
        </Row>
        </Container>
        <ListGroup>
      <ListGroupItem>NewMessage</ListGroupItem>
      <ListGroupItem>New Message</ListGroupItem>
      <ListGroupItem>New Message</ListGroupItem>
      <ListGroupItem>New Message</ListGroupItem>
      <ListGroupItem>New Message</ListGroupItem>
    </ListGroup>
    <FormTextarea placeholder="Start Typing To Chat" />
    <Button className="pill-button" theme="info">
                Submit
              </Button>

      </>
    );
  }
}

export default NewPackPage;
