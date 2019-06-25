import React, { Component } from "react";
import "./style.css";
import { Form, FormInput, FormTextarea, FormGroup, Button } from "shards-react";
import Auth from "../../utils/Auth";
import UserContext from "../../context/UserContext";

class InputInfo extends Component {
  static contextType = UserContext;
  state = {
    description: "",
    location: "",
    username: "",
    password: "",
    userImg: ""
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  createHandler = e => {
    e.preventDefault();
    const { username, password, description, location} = this.state;
    if (username && password && description && location) {
      Auth.createUser(
        username,
        password,
        location,
        description,
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
            src="http://placekitten.com/300/300"
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
                href="/avatarpage"
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
                placeholder="Username"
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
      </>
    );
  }
}

export default InputInfo;
