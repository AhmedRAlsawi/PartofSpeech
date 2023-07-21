import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO"


function Rank() {
  const currentScore = localStorage.getItem("score")
  const navigate = useNavigate();
  const [rank, setRank] = useState(0);

  /**
   * @function getScore - To fetch rank from the API
   **/
  const getScore = async () => {
    fetch(
      "http://localhost:5000/score/rank",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ score: currentScore }),
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

  /**
   * @function goBack - To navgiate to Quiz Page to re/Take it
   **/
  const goBack = () => {
    navigate("/wordsquiz");
  };

  /**
   * To fetch if he already has answered the quiz before
   **/
  useEffect(() => {
    if (currentScore) getScore();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="text-center">
      <SEO myTitle='My Score' myDesc="Here you can view the final score after submitting your answers" />
      {!currentScore ?
        <div>
          <Button
            className="my-2 col-4"
            variant="success"
            size="lg"
            onClick={goBack}
          >
            Take The Assemssment
          </Button>
        </div>
        :
        <>
          <div className="text-primary my-4">
            <h1>Your rank is {rank}</h1>
          </div>
          <div>
            <Button
              className="my-2 col-4"
              variant="warning"
              size="lg"
              onClick={goBack}
            >
              Retake The Assemssment
            </Button>
          </div>
        </>
      }
    </div>
  );
}

export default Rank;
