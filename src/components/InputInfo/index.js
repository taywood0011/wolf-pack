import React, { Component } from "react";
import "./style.css";
import { Form, FormInput, FormTextarea, FormGroup, Button } from "shards-react";

class InputInfo extends Component {
  state = {
    formControl: {
      description: "Tell Us About Yourself/Howl/Pack",
      name: "Username/Howl/Pack"
    }
  };
  render() {
    return (
      <>
        <div className="img-container">
          <img className="edit-img" src="http://placekitten.com/300/300" alt="add-img" />
          <div className="img-text-center">
            <span>
              {" "}
              <Button outline squared size="md" theme="light">
                Choose An Image
              </Button>{" "}
            </span>
          </div>
        </div>
        <div className="form-container">
          <Form>
            <FormGroup>
              <FormInput
                id="#username"
                placeholder={this.state.formControl.name}
              />
            </FormGroup>
            <FormGroup>
              <FormInput id="#password" placeholder="City, State" />
            </FormGroup>
            <FormTextarea placeholder={this.state.formControl.description} />
          </Form>
        </div>
      </>
    );
  }
}

export default InputInfo;
