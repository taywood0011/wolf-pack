import React, { Component } from "react";
import Avatar from "../Avatar";
import "./style.css";
import API from "../../utils/API";

class AvatarPage extends Component {
  state = {
    avatars: [],
  };

  componentDidMount() {
    console.log('loading avatars')
    API.showAvatars()
      .then(res => {
        console.log('avatars loaded', res.data)
        this.setState({ avatars: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log('AvatarPage', this.props);

    return (
      <div className="avatar-container">
          {this.state.avatars.map(avatar => (
            <Avatar
              key={avatar._id}
              {...avatar}
              handleClick={() => this.props.assignAvatar(avatar.image)}
            />
          ))}
      </div>
    );
  }
}

export default AvatarPage;
