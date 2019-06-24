import React from "react";
import PackChat from "../PackChat"
import PackDesc from "../PackDesc"
import { Container } from "shards-react";
import {
  Row,
} from "shards-react";
import PackMember from "../PackMember";
import PackHeader from "../PackHeader";

class NewPackPage extends React.Component {
  state = {
      pack: {
        image: "http://placekitten.com/300/300",
        packName: "Pack Name Example",
        description: "A really good pack to be in.",
        category: "AwesomePacks"
      },
    packMember: [
      {
        name: "username1",
        location: "location",
        packMemberImg: "http://placekitten.com/300/300",
        _id: "13456"
      },
      {
        name: "username1",
        location: "location",
        packMemberImg: "http://placekitten.com/300/300",
        _id: "643"
      },
      {
        name: "username1",
        location: "location",
        packMemberImg: "http://placekitten.com/300/300",
        _id: "134245256"
      }
    ],
    newMessage: "Hello World!"



    
  };

  render() {
    return (
      <>
      {/* pack header */}
        <PackHeader image={this.state.pack.image} packName={this.state.pack.packName} />
        {/* pack description card */}
        <PackDesc category={this.state.pack.category} description={this.state.pack.description}/>
        {/* pack members */}
        <Container>
          <Row>
            {this.state.packMember.map(packMember => (
              <PackMember key={packMember._id} {...packMember} />
            ))}
          </Row>
        </Container>
        {/* pack chat */}
       <PackChat newMessage={this.state.newMessage}/>
      </>
    );
  }
}

export default NewPackPage;
