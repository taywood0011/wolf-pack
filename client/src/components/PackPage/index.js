import React from "react";
import PackChat from "../PackChat"
import PackDesc from "../PackDesc"
import { Container } from "shards-react";
import {
  Row,
} from "shards-react";
import PackMember from "../PackMember";
import PackHeader from "../PackHeader";
import API from "../../utils/API";


class PackPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image: "",
      catagory: "",
      description: "",
      members: [],
      chat: ""
    };
  }

  loadPack = id => {
    API.getPack(id)
      .then(res =>
        this.setState({
          title: "",
          image: "",
          catagory: "",
          description: "",
          members: [],
          chat: ""
        })
      )
      .catch(err => console.log(err));
  };

  //   handleInputChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value
  //     });

  //     return null;
  //   };

  // }

  componentDidMount() {
    this.loadPack();
  }

  render() {
    return (
      <>
        {/* pack header */}
        <PackHeader image={this.state.image} packName={this.state.title} />
        {/* pack description card */}
        <PackDesc category={this.state.category} description={this.state.description} />
        {/* pack members */}
        <Container>
          <Row>
            {this.state.members.map(packMember => (
              <PackMember key={packMember._id} {...packMember} />
            ))}
          </Row>
        </Container>
        {/* pack chat */}
        <PackChat newMessage={this.state.newMessage} />
      </>
    );
  }
}

export default PackPage;
