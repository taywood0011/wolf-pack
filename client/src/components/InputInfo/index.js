import React, { Component } from "react";
import "./style.css";
import { Form, FormInput, FormTextarea, FormGroup, Button } from "shards-react";
import Auth from "../../utils/Auth";
import AvatarPage from "../AvatarPage";

class InputInfo extends Component {
  state = {
    description: this.props.user ? this.props.user.description : "",
    location: this.props.user ? this.props.user.location : "",
    username: this.props.user ? this.props.user.username : "",
    password: this.props.user ? "password" : "",
    userAvatar: this.props.user ? this.props.user.userAvatar : "",
    pickingAvatar: false
  };

  assignAvatar = image => {
    this.setState({
      userAvatar: image,
      showAvatarList: false
    });
    this.props.history.push("/profile");
  };

  setValue = (name, value) => {
    this.setState({ [name]: value });
  };

  showAvatarList = () => {
    this.setState({
      showAvatarList: true
    });
  };

  create = () => {
    if (
      this.state.username &&
      this.state.password &&
      this.state.description &&
      this.state.location &&
      this.state.userAvatar
    ) {
      Auth.createUser(
        this.state.username,
        this.state.password,
        this.state.location,
        this.state.description,
        this.state.userAvatar,
        user => {
          this.props.setUser(user);
          this.props.history.push('/');
        }
      );
    }
  };

  render() {
    if (this.state.showAvatarList) {
      return <AvatarPage assignAvatar={this.assignAvatar} />;
    } else {
      return (
        <UserInfo
          {...this.state}
          showAvatarList={this.showAvatarList}
          create={this.create}
          setValue={this.setValue}
        />
      );
    }
  }
}

class UserInfo extends Component {
  changeHandler = e => {
    const { name, value } = e.target;
    this.props.setValue(name, value);
  };

  createHandler = e => {
    e.preventDefault();
    this.props.create();
  };

  avatarHandler = e => {
    e.preventDefault();
    this.props.showAvatarList();
  };

  render() {
    return (
      <>
        <div className="img-container">
          <img
            className="edit-img"
            src={
              !this.props.userAvatar
                ? "http://placekitten.com/300/300"
                : this.props.userAvatar
            }
            alt="choose avatar"
            onClick={this.avatarHandler}
          />
        </div>
        <div className="form-container">
          <Form>
            <FormGroup>
              <FormInput
                id="username"
                name="username"
                placeholder="User Name"
                type="text"
                value={this.props.username}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={this.props.password}
                onChange={this.changeHandler}
              />
              <FormInput
                id="location"
                name="location"
                placeholder="Location"
                type="text"
                value={this.props.location}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormTextarea
              id="description"
              name="description"
              placeholder="Description"
              type="text"
              value={this.props.description}
              onChange={this.changeHandler}
            />
          </Form>
          <Button
            className="pill-button"
            theme="info"
            onClick={this.createHandler}
          >
            Submit
          </Button>
        </div>
      </>
    );
  }
}

export default InputInfo;
