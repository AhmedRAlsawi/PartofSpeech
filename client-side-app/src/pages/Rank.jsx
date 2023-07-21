import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Rank() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = location.search;
  const score = parseInt(query.split("=")[1]);
  const [rank, setRank] = useState(0);
  /**
   * To fetch rank from the API
   */
  const getScore = async () => {
    fetch(
      "http://localhost:5000/score/rank",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ score }),
      },
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setRank(data.rank);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const goBack = () => {
    navigate("/wordsquiz");
  };
  useEffect(() => {
    getScore();
  }, [score]);

  return (
    <div className="text-center">
      <div className="text-primary my-4">
        <h1>Your rank is {rank}</h1>
      </div>
      <div>
        <Button
          className="my-2 col-2"
          variant="warning"
          size="lg"
          onClick={goBack}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default Rank;
