import React, { Component } from "react";
import "./style.css";
import { Form, FormInput, FormTextarea, FormGroup, Button } from "shards-react";
import UserContext from "../../context/UserContext";
import { Route, Link } from "react-router-dom";
import AvatarPage from "../AvatarPage";
import API from "../../utils/API";

class CreatePack extends Component {
  static contextType = UserContext;
  state = {
    title: "",
    image: "",
    category: "",
    description: ""
  };

  assignAvatar = image => {
    console.log(image);
    this.setState({
      image: image
    });
    window.location.pathname === "/newPack/avatar"
    ? this.props.history.push("/newPack")
    : this.props.history.push("/newHowl");
  };
 
  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  createHandler = e => {
    e.preventDefault();
    const { title, image, category, description } = this.state;
    window.location.pathname === "/newPack"
                    ? API.postPack(this.state)
                    : API.postHowl(this.state);
   
      this.props.history.push("/packCategories");
    
  };

  render() {
    return (
      <>
        <div className="img-container">
          <img
            className="edit-img"
            src={
              !this.state.image
                ? "http://placekitten.com/1100/1100"
                : this.state.image
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
                id="title"
                name="title"
                placeholder={!this.state.title ? "title" : this.state.title}
                type="text"
                value={this.state.title}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                id="category"
                name="category"
                placeholder="Category"
                type="text"
                value={this.state.category}
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

export default CreatePack;
