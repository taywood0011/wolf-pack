import React from "react";
import { Col } from "shards-react";


function InviteGroup(props) {
 return (
   <Col sm="12" md="4" lg="3">
     <img className="avatar-img" src={props.image || "https://place-hold.it/300x200"} alt="stock avatar" onClick={props.handleClick} _id={props._id}/>
   </Col>
 );
}

export default InviteGroup;