import React from "react";
import { Col, Card, CardBody, CardImg } from "shards-react";


export default function   PackMember(props) {
  return (
    
      
        <Col>
          <Card className="pack-member-card">
            <CardImg className="pack-member-img" top src={props.userAvatar} alt={props.userName} onClick={props.clickHandler} job="view"/>
            <CardBody className="pack-member-card-body">
              <p className="pack-member-info" >{props.username}</p>
              <hr></hr>
              <p className="pack-member-info">{props.location}</p>
            </CardBody>
          </Card>
        </Col>
        
        
  );
}

