import React, { useState } from "react";
import ModalAnswer from "./ModalAnswer.js";

let tests = [
  [{ name: 1 }, { name: 2 }, { name: 3 }],
  [{ name: 4 }, {}, {}],
];

const TestWebsites = () => {
  const [currentTest, setCurrentTest] = useState({});

  const handleClick = (evt, test) => {
    setCurrentTest(test);
  };

  const code = tests.map((group) => {
    console.log(group);
    return (
      <div className="row">
        {group.map((test) => {
          return (
            <div className="col-sm">
              {test.name ? (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{test.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={(evt) => handleClick(evt, test)}
                    >
                      Launch demo modal
                    </button>
                    <ModalAnswer test={currentTest}></ModalAnswer>
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

  return <div className="container">{code}</div>;
};

export default TestWebsites;
