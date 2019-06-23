import React from "react"

import { ListGroupItem } from "shards-react"

function NewMessage(props) {
  return (
   <ListGroupItem>
       {props.newMessage}
   </ListGroupItem>
  );
}

export default NewMessage;
