import React, { Component } from "react";
import "./style.css";
import { Form, FormInput, FormTextarea, FormGroup } from "shards-react";

class InputInfo extends Component {

  state ={
    formControl: {
      description: "Tell Us About Yourself/Howl/Pack",
      name: "Username/Howl/Pack"
    }
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <FormInput id="#username" placeholder={this.state.formControl.name} />
        </FormGroup>
        <FormGroup>
          <FormInput id="#password" placeholder="City, State" />
        </FormGroup>
        <FormTextarea placeholder={this.state.formControl.description} />
      </Form>
    );
  }
}

export default InputInfo;
