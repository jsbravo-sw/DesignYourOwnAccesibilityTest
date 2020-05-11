import React, { useState, useEffect } from "react";
import ModalAnswerView from "./ModalAnswerView.js";

const id = "5eb8d312382a666950f8d091";

const TestAnswers = (props) => {
  const [currentAnswer, setCurrentAnswer] = useState({});
  const [answers, setAnswers] = useState([]);

  const handleClick = (evt, answer) => {
    setCurrentAnswer(answer);
  };

  useEffect(() => {
    fetch(`/getAllAnswersTest/${id}`)
      .then((response) => response.json())
      .then((tests) => {
        console.log(tests);
        const chunked_arr = [];
        const totalLength = tests.length;
        const residue = totalLength % 3;
        const mod3Length = totalLength - residue;

        for (var i = 0; i < mod3Length; i += 3) {
          const temp = [tests[i], tests[i + 1], tests[i + 2]];
          chunked_arr.push(temp);
        }

        if (residue === 1) {
          const temp = [tests[mod3Length + 1], {}, {}];
          chunked_arr.push(temp);
        }

        if (residue === 2) {
          const temp = [tests[mod3Length + 1], tests[mod3Length + 2], {}];
          chunked_arr.push(temp);
        }

        console.log("chonk", chunked_arr);
        setAnswers(chunked_arr);
      });
  }, []);

  const code = answers.map((group, i) => {
    console.log("group", group);
    return (
      <div key={"row" + i} className="row">
        {group.map((answer, j) => {
          console.log("answer", answer);
          return (
            <div key={"answer" + j} className="col-sm">
              {answer ? (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{"answer" + j}</h5>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#modalAnswerView"
                      onClick={(evt) => handleClick(evt, answer)}
                    >
                      See the answer
                    </button>
                    <ModalAnswerView answer={currentAnswer}></ModalAnswerView>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="container">
      <h1>Test answers</h1>
      {code}
    </div>
  );
};

export default TestAnswers;
