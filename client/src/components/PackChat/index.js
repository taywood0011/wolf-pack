import React from "react"
import NewMessage from "../NewMessage"
import { Container, ListGroup, FormTextarea, Button } from "shards-react"


class PackChat extends React.Component {

  state = {
    messages: this.props.chat
  }

  getMessages () {
    //API call to (TODO) updated model to grab previous messages for pack with _id of _id
  }

  addMessage () {
    //API call to push newest message to DB

    const newMessages = this.state.messages
    //newMessages.push(/* message value */)
    this.setState({
      messages: newMessages
    })
  }

  componentDidMount () {
    this.setState({
      messages: this.getMessages
    })
  }



  render () {
    return(
      <Container>
        <ListGroup>
          <NewMessage newMessage={this.props.newMessage} />
        </ListGroup>
        <FormTextarea placeholder="Start Typing To Chat" />
        <Button className="pill-button" theme="info" type="submit" onClick={this.addMessage} job="submit">
          Submit
        </Button>
      </Container>
    )
  }

}
export default PackChat


