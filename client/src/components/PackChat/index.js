import React from "react"
import NewMessage from "../NewMessage"
import { Container, ListGroup, FormInput, FormTextarea, Button } from "shards-react"
import firebase from "firebase"
import "./style.css"

const firebaseConfig = {
  apiKey: "AIzaSyBGsQy2KqnvRtOT7pZz8yIexudZyncUhX8",
  authDomain: "wolf-pack-115dc.firebaseapp.com",
  databaseURL: "https://wolf-pack-115dc.firebaseio.com",
  projectId: "wolf-pack-115dc",
  storageBucket: "",
  messagingSenderId: "592335107914",
  appId: "1:592335107914:web:121b231912eb523e"
};

firebase.initializeApp(firebaseConfig);
const firebaseData = firebase.database();


class PackChat extends React.Component {

  state = {
    messages: [],
    packRef: firebaseData.ref(this.props.packID),
    draft: ""
  }

  getMessages () {
    //API call to (TODO) updated model to grab previous messages for pack with _id of _id
  }

  addMessage = () => {
  
    /*
    var messageListRef = firebase.database().ref('message_list');
    var newMessageRef = messageListRef.push();
    newMessageRef.set({
      'user_id': 'ada',
      'text': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.'
    });
    // We've appended a new message to the message_list location.
    var path = newMessageRef.toString();
    // path will be something like
    // 'https://sample-app.firebaseio.com/message_list/-IKo28nwJLH0Nc5XeFmj'
    */

    const newMessageRef = this.state.packRef.push();

    newMessageRef.set({
      author: this.props.user.username,
      authorID: this.props.user._id,
      message: this.state.draft,
      time: Date.now()
    })
    const newMessages = this.state.messages
    //newMessages.push(/* message value */)
    this.setState({
      messages: newMessages
    })
  }

  componentDidMount = () => {
    
    this.state.packRef.on("value", data => {
      const arrData = Object.values(data.val());

      this.setState({
        messages: arrData
      })
      console.log("State messages: ", this.state.messages)


    })

  }

  changeHandler = e => {
    this.setState({
      draft: e.target.value
    })
  }



  render () {
    return(
      <Container>
        <ListGroup>
          {/* map this.state.messages to generate NewMessages */}
          {this.state.messages.map( (message, i) => (
            <NewMessage key={message.authorID + `${i}`} {...message} />
          ))}

        </ListGroup>
        <FormInput
                id="draft"
                name="draft"
                placeholder="Chat"
                type="text"
                value={this.state.draft}
                onChange={this.changeHandler}
              />
        <Button className="pill-button" theme="info" type="submit" onClick={this.addMessage} job="submit">
          Submit
        </Button>
      </Container>
    )
  }

}
export default PackChat


