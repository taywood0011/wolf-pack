import React from "react";
import { Container, Row, Col } from "shards-react";
import MemberCards from "../Components/MemberCards";
import Form from "..components/Form";
import Message from "../components/Messages";
import PackForm from "../components/PackForm";
import Jumbotron from "../Jumbotron"

class Pack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      about: "",
      chat: "",
      formData: ""
    };

    // loadPack = id =>  {
    //   API.getPack(id)
    //     .then(res =>
    //       this.setState({
    //         members: res.data,
    //         about: "",
    //         chat: "",
    //         formData: ""
    //       })
    //     )
    //     .catch(err => console.log(err));
    // };

  //   handleInputChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value
  //     });

  //     return null;
  //   };
  // }

  // componentDidMount() {
  //   this.loadPack();
  }

  Render() {
    return (
      <>
      <Container fluid>
        <Col size="12">
          <Jumbotron>
            <image 
              value={this.pack.avatar}
              name="packAvatar"
            ></image>

            <h1
            value={this.pack.name}
            name="packName"
            ></h1>
          </Jumbotron>
          </Col>
          </Container>
          <Row>
          <Container>
          <Col size="6">


          </Col>

          </Container>
          
          <Container>
          <Col size="6">
          <form>
            <Input
              value={this.pack.genre}
              onChange={this.handleInputChange}
              name="genre"
            />
            <Input
              value={this.pack.availability}
              onChange={this.handleInputChange}
              name="availability"
            />
            <TextArea
              value={this.pack.catagories}
              onChange={this.handleInputChange}
              name="catagories"
            />
            <FormBtn
              onClick={this.handleFormSubmit}
            >
              Save
            </FormBtn>
          </form>
          </Col>
          </Container>
          </Row> 
    </>
  );
}
}

export default Pack;
