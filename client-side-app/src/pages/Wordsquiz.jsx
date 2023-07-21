import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Wordquiz() {
  const navigate = useNavigate();
  const [wordList, setWordList] = useState([]);
  const answers = ["adjective", "verb", "noun", "adverb"];
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [noSelection, setNoSelection] = useState(false);

  /**
   * To fetch wordslist from the API
   */
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/task-data/wordlist", {
        mode: "cors",
      });
      const fetchedWrodList = await res.json();
      setWordList(fetchedWrodList);
      setToggle(prev => !prev);
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * To reset all states if the user wanted to try again
   */
  const reset = () => {
    setQuestions(0);
    setScore(0);
    setToggle(prev => !prev);
    setWordList([]);
    setWrongAnswer(false);
  };

  /**
   * To show the next question
   */
  const nextQuestion = (e) => {
    if (questions === wordList.length - 1) {
      toBeDirected();
    } else {
      checkSelection(false)
      setQuestions(prev => prev + 1);
      if (wrongAnswer) setWrongAnswer(prev => !prev)
      if (noSelection) setNoSelection(prev => !prev)
    }
  };

  /**
   * To submit his answer on a specific question or to redirected to the rank page
   */
  const handleSub = (e) => {
    e.preventDefault();
    checkSelection(true)
    const data = new FormData(e.target);
    for (const n of data) {
      if (n[1] === wordList[questions].pos) {
        setWrongAnswer(false);
        checkSelection(false)
        if (questions === wordList.length - 1) {
          setScore(prev => prev + 1);
          setDisabled(true);
        } else {
          setQuestions(prev => prev + 1);
          setScore(prev => prev + 1);
        }
      } else {
        setWrongAnswer(true);
      }
    }
  };

  /**
   * To be redirectied to the rank page
   */
  const toBeDirected = () => {
    navigate(`/score?score=${(score / wordList.length) * 100}`);
  };

  const clearError = () => {
    if (wrongAnswer) setWrongAnswer(false)
    if (noSelection) setNoSelection(false)
  }

  function checkSelection(key) {
    let elements = document.getElementsByTagName("input")
    if (key) {
      let checked = [...elements].filter(element => element.checked === true)
      if (!checked.length) setNoSelection(true)
    }
    else {
      for (let element of elements) {
        element.checked = false
      }
    }
  }

  useEffect(() => { }, [wordList]);
  useEffect(() => { }, [questions]);

  return (
    <>
      <div className="row justify-content-center">
        {toggle ? (
          <Button
            onClick={reset}
            className="my-2 col-2"
            variant="warning"
            size="lg"
          >
            Reset
          </Button>
        ) : (
          <Button
            onClick={fetchData}
            className="my-2 col-2"
            variant="success"
            size="lg"
          >
            Start
          </Button>
        )}
      </div>
      <div className="row ">
        {wordList.length !== 0 ? (
          <div className="bg-light rounded my-2 text-center">
            <div className="h3 mb-2">
              Question no {questions + 1} / {wordList.length}
            </div>
            <small className="mb-2">Select an answer, then click submit</small>
            <div className="mb-2">
              <div className="progress">
                <div
                  className={`progress-bar 
                  ${score < (wordList.length * 0.5) ? "bg-danger"
                      : score >= (wordList.length * 0.5) && score < (wordList.length * 0.70) ? "bg-warning"
                        : "bg-success"}`}
                  role="progressbar"
                  aria-valuenow={score}
                  aria-valuemin="0"
                  style={{ width: `${(score / wordList.length) * 100}%` }}
                  aria-valuemax={wordList.length}
                >
                  {(score / wordList.length) * 100} %
                </div>
              </div>
            </div>
            {wordList.length !== 0 && (
              <div>
                <div className="h4 mb-3">
                  {wordList[questions].word.toUpperCase()} is a/an . . . . . . .
                  . . . .
                </div>

                <div>
                  <form onSubmit={(e) => handleSub(e)}>
                    {answers &&
                      answers.map((ans, i) => {
                        return (
                          <>
                            <input
                              key={i}
                              type="radio"
                              name="ans"
                              id={ans}
                              value={ans}
                              onChange={clearError}
                            />
                            <label className="mx-2 h6" htmlFor={ans} >
                              {ans.toUpperCase()}
                            </label>
                          </>
                        );
                      })}

                    <div className="d-flex mt-3 flex-column gap-3 align-items-center w-75 mx-auto">
                      <Button
                        type="submit"
                        className="col-4 "
                        size="sm"
                        disabled={disabled}
                      >
                        Submit
                      </Button>
                      <Button
                        className="col-4"
                        size="sm"
                        onClick={nextQuestion}
                      >
                        {questions === wordList.length - 1 ? "View my rank" : "Next question"}
                      </Button>
                    </div>
                  </form>
                  {wrongAnswer && (
                    <div className="my-3 ">
                      <small className="bg-danger text-white py-1 px-2">
                        Oops, please try again
                      </small>
                    </div>
                  )}
                  {noSelection && (
                    <div className="my-3 ">
                      <small className="bg-info py-1 px-2">
                        No option selected!
                      </small>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-primary text-center">
            <h1>Click start button</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Wordquiz;
