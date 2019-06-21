import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  Button
} from "shards-react";

export default function packMemberCard() {
  return (
    <Card style={{ maxWidth: "100px" }}>
      <CardHeader>{this.packMember.userName}</CardHeader>
      <CardImg src={this.packMember.avatar} />
      <CardBody>
        <Button>See user &rarr;</Button>
      </CardBody>
    </Card>
  );
}