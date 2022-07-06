import React from "react";
import { Card, Button } from "react-bootstrap";

function VotingCard(props) {
  let { candidate, incrementVoteCount } = props;

  return (
    <Card style={{ width: "18rem" }}>
      
      <Card.Body>
        <Card.Title>{candidate.name}</Card.Title>
        <Button variant="primary" onClick={() => incrementVoteCount(candidate._id)}>
          Votar
        </Button>
      </Card.Body>
      <Card.Footer>Quantidade de votos: {candidate.votes}</Card.Footer>
    </Card>
  );
}
export default VotingCard;
