import React, { Component } from "react";
import "./style.css";
import { Form, FormInput, FormTextarea, FormGroup, Button } from "shards-react";
import AvatarPage from "../AvatarPage";

class CreatePack extends Component {
  state = {
    title: "",
    image: "",
    category: "",
    description: "",
    pickingAvatar: false,
    currentUser: this.props.user
  };

  assignAvatar = image => {
    console.log(image);
    this.setState({
      image,
      showAvatarList: false,
    });
    this.props.history.push(this.props.newCategory);
  };

  setValue = (name, value) => {
    this.setState({ [name]: value });
  };

  create = () => {
    const copy = {...this.state};
    this.props.postApi(copy)
    this.props.history.push(this.props.categoryList);
  };

  showAvatarList = () => {
    this.setState({
      showAvatarList: true
    });
  };

  render() {
    if (this.state.showAvatarList) {
      return <AvatarPage assignAvatar={this.assignAvatar} />;
    } else {
      return (
        <PackInfo
          {...this.state}
          {...this.props}
          showAvatarList={this.showAvatarList}
          create={this.create}
          setValue={this.setValue}
        />
      );
    }
  }
}

class PackInfo extends Component {
  assignAvatar = image => {
    console.log(image);
    this.setState({
      image: image
    });
    this.props.history.push(this.props.newCategory);
  };

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
        <h1>Create A New {this.props.label}</h1>
        <div className="img-container">
          <img
            className="edit-img"
            src={this.props.image || "http://placekitten.com/1100/1100"}
            alt="choose avatar"
            onClick={this.avatarHandler}
          />
        </div>
        <div className="form-container">
          <Form>
            <FormGroup>
              <FormInput
                id="title"
                name="title"
                placeholder="Title"
                type="text"
                value={this.props.title}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                id="category"
                name="category"
                placeholder="Category"
                type="text"
                value={this.props.category}
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

export default CreatePack;
