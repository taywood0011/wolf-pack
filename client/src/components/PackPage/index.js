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
import NewMessage from "../NewMessage";


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
      .then(res => {
        console.log(res)
        this.setState({
          ...res.data
        })
      })
      .catch(err => console.log(err));
  };


     handleInputChange = event => {
       const { name, value } = event.target;
       this.setState({
         [name]: value
       });
   };

   handleChatSubmit = ()=> {
    this.setState({
      chat: NewMessage
    });
  };
   

  componentDidMount() {
    this.loadPack(this.props.match.params.id);
  }

  render() {
    return (
      <>
        {/* pack header */}
        <PackHeader image={this.state.image} title={this.state.title} />
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
