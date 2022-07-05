import React from "react";
import { Card } from "react-bootstrap";

function EndVote(props) {
  let { candidate, showWinner } = props;

  return (
    <Card style={{ width: "18rem" }}>
      
      <Card.Body>
        <Card.Title>{candidate.name}</Card.Title>
        <Card.Text style={{ color:"green"}}>{showWinner}</Card.Text>
      </Card.Body>
      <Card.Footer>Quantidade de votos: {candidate.votes}</Card.Footer>
    </Card>
  );
}
export default EndVote;
