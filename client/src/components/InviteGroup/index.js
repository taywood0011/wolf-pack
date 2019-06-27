import React from "react";
import { Col, Card, CardImg, CardBody, CardTitle, Button } from "shards-react";


function InviteGroup(props) {
 return (
   <Col sm="12" md="4" lg="3">
     <Card>
     <CardImg className="avatar-img" src={props.image || "https://place-hold.it/300x200"} alt="stock avatar" />
     <CardBody>
            <CardTitle>
              <p>{props.title || "Title"}</p>
            </CardTitle>
            <h4>{props.category}</h4>
            <h6>{props.description || "No Description"}</h6>
            <Button
                   onClick={props.handleClick} _id={props._id} 
                  >
                    Invite
                  </Button>
          </CardBody>
     </Card>
     
   </Col>
 );
}

export default InviteGroup;