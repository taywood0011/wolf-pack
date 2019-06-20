import React from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";

export default class LoginComponent extends React.Component() {

 render() {
  return (
    <Form>
      <FormGroup>
        <label htmlFor="#username">Username</label>
        <FormInput id="#username" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
      </FormGroup>
      <Button theme="dark">Login</Button>
      <Button theme="dark">Create</Button>
    </Form>
  );
}
}