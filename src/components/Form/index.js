import React from "react"
import "./style.css"
import { Form, FormInput, FormTextarea, FormGroup } from "shards-react";

function InputInfo(props) {
 
return (
    <Form>
    <FormGroup>
      <FormInput id="#username" placeholder={props.nameLabel} />
    </FormGroup>
    <FormGroup>
      <FormInput id="#password" placeholder="City, State" />
    </FormGroup>
    <FormTextarea placeholder={props.descriptionLabel}/>
  </Form>
  
)
}

export default InputInfo