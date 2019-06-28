import React from "react"

import { ListGroupItem } from "shards-react"

function NewMessage(props) {
  return (
   <ListGroupItem>
       {`${props.author}: ${props.message}`}
   </ListGroupItem>
  );
}

export default NewMessage;
