import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import EndVote from "./components/EndVote";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

// Array com candidatos

const dadosCand = [
  {
    _id: 1,
    name: "Robson",
    votes: 0,
  },
  {
    _id: 2,
    name: "Michely",
    votes: 0,
  },
  {
    _id: 3,
    name: "Marcos",
    votes: 0,
  },
];

// Funcao principal do App

function App() {
  let [candidates, setcandidates] = useState([]);
  let [voting, setvoting] = useState(0);
  const [clicked, setClicked] = React.useState(false);

  useEffect(() => {
    setcandidates(dadosCand);
  }, []);

  //Funcao para somar votos

  function incrementVoteCount(candidateId) {
    candidates = candidates.map((candidate) => {
      if (candidate._id === candidateId) {
        candidate.votes = candidate.votes + 1;
        if(candidate.votes > voting){
          setvoting(candidate.votes)
        }
      }
      return candidate;
    });
    setcandidates(candidates);
  }

  //Funcao para escrever quem ganhou

  function showWinner(candidate, voting) {

    if (candidate.votes == voting)
      return "Esse(a) candidato(a) é o vendedor!";
   
  }

  //Condicional para apresentar VotingCard ou EndVote

  if (clicked) {

    // Retorna EndVote

    return (
      <Container className="app">
        <Row>
          {candidates.map((candidate) => {
            return (
              <Col md={4}>
                <EndVote
                  candidate={candidate}
                  
                  showWinner={showWinner(candidate, voting)}

                  
                />
              </Col>
            );
          })}
        </Row>

      </Container>
    );

  } else {

    //Retorna VotingCard

    return (
      <Container className="app">
        <Row>
          {candidates.map((candidate) => {
            return (
              <Col md={4}>
                <VotingCard
                  candidate={candidate}
                  incrementVoteCount={(candidateId) =>
                    incrementVoteCount(candidateId)
                  }
                 
               
                />
               
              </Col>
            );
          })}
        </Row>
<br></br>
        <Row>
          <Col  md={4}> 
        <Button variant="success" size="lg" onClick={() => setClicked(true)}>
          Encerrar a votação!
        </Button>
        </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
