import React, { Component } from "react";
import { Container, Row } from "shards-react";
import InviteGroup from "../InviteGroup";

import API from "../../utils/API";
import {withRouter} from "react-router-dom"

class InviteGroupPage extends Component {
 state = {
   howlAuthor: null,
   userGroups: [],
   howlUserName: null
 };

 assignUserGroup = e => {
   const packID = e.target.attributes._id.value;
   console.log("Author", this.state.howlAuthor)
   API.joinPack(packID, this.state.howlAuthor).then(newPack => {
       console.log("SUCCESS (maybe): ", newPack)

   })
   alert(`You Invited ${this.state.howlUserName} to a group`)
 };

 componentDidMount() {
     /*
   currUser = localStorage.getItem("username")
   this.getCurrUser(currUser)
   this.loadUserGroups(currUser)
   */

   API.getHowl(this.props.match.params.id).then( howl => {
       console.log("Howl: ", howl)
       return API.getUser(howl.data.author)
   }).then(user => {
       console.log("User: ", user)
        this.setState({
            howlAuthor: user.data._id,
            howlUserName: user.data.username
        })
   }).catch(err => console.log(err))

   this.loadUserGroups(this.props.user._id);

 }

 loadUserGroups = (id) => {
   API.getUserPacks(id)
     .then(res => this.setState({ userGroups: res.data }))
     .catch(err => console.log(err));
 };

 render() {
   // console.log(this.props);

   return (
     <Container className="avatar-container">
       <Row>
         {this.state.userGroups.map(userGroup => (
           <InviteGroup
             key={userGroup._id}
             {...userGroup}
             handleClick={this.assignUserGroup}
           />
         ))}
       </Row>
     </Container>
   );
 }
}

export default withRouter(InviteGroupPage);