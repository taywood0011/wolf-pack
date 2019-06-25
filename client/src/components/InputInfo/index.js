import React, { Component } from "react";
import "./style.css";
import { Form, FormInput, FormTextarea, FormGroup, Button } from "shards-react";
import Auth from "../../utils/Auth";
import UserContext from "../../context/UserContext";
import { Route, Link } from "react-router-dom";
import AvatarPage from "../AvatarPage";

class InputInfo extends Component {
  static contextType = UserContext;
  state = {
    description: "",
    location: "",
    username: "",
    password: "",
    userAvatar: ""
  };

  assignAvatar = image => {
    console.log(image);
    this.setState({
      userAvatar: image
    });
    this.props.history.push("/profile");
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  createHandler = e => {
    e.preventDefault();
    const {
      username,
      password,
      description,
      location,
      userAvatar
    } = this.state;
    if (username && password && description && location && userAvatar) {
      Auth.createUser(
        username,
        password,
        location,
        description,
        userAvatar,
        response => {
          this.context.setUser(response);
          this.props.history.push("/");
        }
      );
    }
  };

  render() {
    return (
      <>
        <div className="img-container">
          <img
            className="edit-img"
            src={
              !this.state.userAvatar
                ? "http://placekitten.com/300/300"
                : this.state.userAvatar
            }
            alt="choose avatar"
          />
          <div className="img-text-center">
            <span>
              {" "}
              <Button
                outline
                squared
                size="md"
                theme="light"
                to={`${this.props.match.path}/avatar`}
                tag={Link}
              >
                Choose An Image
              </Button>{" "}
            </span>
          </div>
        </div>
        <div className="form-container">
          <Form>
            <FormGroup>
              <FormInput
                id="username"
                name="username"
                placeholder={
                  !this.state.username ? "Username" : this.state.userAvatar
                }
                type="text"
                value={this.state.username}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
              <FormInput
                id="location"
                name="location"
                placeholder="Location"
                type="text"
                value={this.state.location}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormTextarea
              id="description"
              name="description"
              placeholder="Description"
              type="text"
              value={this.state.description}
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
        <Route
          exact
          path={`${this.props.match.path}/avatar`}
          render={props => (
            <AvatarPage {...props} assignAvatar={this.assignAvatar} />
          )}
        />
      </>
    );
  }
}

export default InputInfo;
