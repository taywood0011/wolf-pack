import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  Container,
  Row,
  Col
} from "shards-react";
import "./styles.css";
import API from "../../utils/API";
import UserContext from "../../context/UserContext";

export default class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: props.type
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  clickFn = (id, user) => {
    if (this.state.type === "howl") {
      //invite to group
      console.log("invited");
      this.toggle();
    } else {
      //request to join

      API.joinPack(this.props._id, user)
        .then(function() {
          console.log("Pack joined");
        })
        .catch(err => {
          console.log(err);
        });

      console.log("requested");
      this.toggle();
    }
  };

  render() {
    let user;
    return (
      <div>
        <Card style={{ maxWidth: "300px" }} onClick={this.toggle}>
          <CardImg src={this.props.img || "https://place-hold.it/300x200"} />
          <CardBody>
            <CardTitle>
              <h2>{this.props.title || "Title"}</h2>
            </CardTitle>
            <h4>{this.props.category}</h4>
            <h6>{this.props.description || "lorem ipsim dolor imet"}</h6>
          </CardBody>
        </Card>

        <Modal open={this.state.open} toggle={this.toggle}>
          <ModalHeader>
            {this.props.title} by {this.props.author}
          </ModalHeader>

          <ModalBody>{this.props.description}</ModalBody>

          <Container>
            <Row>
              <Col sm="6">
                <Button
                  className="modal-button"
                  block
                  squared
                  outline
                  theme="info"
                  onClick={this.toggle}
                >
                  {"Cancel"}
                </Button>
              </Col>
              <Col sm="6">
                <UserContext.Consumer>
                  {context => (user = context.user)}
                </UserContext.Consumer>
                <Button
                  className="modal-button"
                  block
                  squared
                  outline
                  theme="info"
                  onClick={() => {
                    this.clickFn(this.props._id, user);
                  }}
                >
                  {this.props.btnAction || "Join"}
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    );
  }
}
