import React, { useState, useEffect } from "react";
import ModalConsent from "./ModalConsent.js";

const TestWebsites = () => {
  const [currentTest, setCurrentTest] = useState({});
  const [tests, setTests] = useState([]);

  const handleClick = (evt, test) => {
    setCurrentTest(test);
  };

  useEffect(() => {
    fetch("/getAllTests")
      .then((response) => {
        return response.json();
      })
      .then((tests) => {
        const chunked_arr = [];
        const totalLength = test.length;
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

        console.log(chunked_arr);
        setTests(chunked_arr);
      });
  }, []);

  const code = tests.map((group, i) => {
    return (
      <div key={"row" + i} className="row">
        {group.map((test) => {
          return (
            <div key={test.title + 1} className="col-sm">
              {test.title ? (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{test.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {test.url}
                    </h6>
                    <p className="card-text">{test.description}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#modalConsent"
                      onClick={(evt) => handleClick(evt, test)}
                    >
                      Test this website
                    </button>
                    <ModalConsent test={currentTest}></ModalConsent>
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
      <h1>Test some websites</h1>
      {code}
    </div>
  );
};

export default TestWebsites;
