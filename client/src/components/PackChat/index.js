import React from "react"
import NewMessage from "../NewMessage"
import { Container, ListGroup, FormTextarea, Button } from "shards-react"


function PackChat(props) {
return(
    <Container>
<ListGroup>
  <NewMessage newMessage={props.newMessage} />
</ListGroup>
<FormTextarea placeholder="Start Typing To Chat" />
<Button className="pill-button" theme="info" type="submit" onClick={props.handleChatSubmit}>
  Submit
</Button>
</Container>
)

}
export default PackChat


