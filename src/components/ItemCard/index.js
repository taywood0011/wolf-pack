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

export default class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <Card style={{ maxWidth: "300px" }} onClick={this.toggle}>
          <CardImg src={this.props.img || "https://place-hold.it/300x200"} />
          <CardBody>
            <CardTitle>{this.props.title || "Title"}</CardTitle>
            <p>{this.props.body || "lorem ipsim dolor imet"}</p>
          </CardBody>
        </Card>

        <Modal open={this.state.open} toggle={this.toggle}>
          <ModalHeader>{this.props.title}</ModalHeader>

          <ModalBody>{this.props.body}</ModalBody>

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
                <Button
                  className="modal-button"
                  block
                  squared
                  outline
                  theme="info"
                  onClick={this.props.clickFn.bind(this)}
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
