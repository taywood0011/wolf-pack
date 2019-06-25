import React, { Component } from "react";
import { Container, Row } from "shards-react";
import Avatar from "../Avatar";
import "./style.css";
import API from "../../utils/API";

class AvatarPage extends Component {
  state = {
    avatars: []
  };

  componentDidMount() {
    this.loadAvatars();
  }

  loadAvatars = () => {
    API.showAvatars()
      .then(res => this.setState({ avatars: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props);

    return (
      <Container className="avatar-container">
        <Row>
          {this.state.avatars.map(avatar => (
            <Avatar
              key={avatar._id}
              {...avatar}
              handleClick={() => this.props.assignAvatar(avatar.image)}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default AvatarPage;
