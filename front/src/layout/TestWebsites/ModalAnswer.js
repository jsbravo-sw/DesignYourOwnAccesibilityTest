import React, { useRef, useState, useEffect } from "react";

const ModalAnswer = (props) => {
  const formRef = useRef();
  const handleSubmit = (evt) => {};
  console.log("props", props);
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.test.title ? props.test.title : "Error"}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {props.test.title ? (
            <div className="modal-body">
              <form ref={formRef} onSubmit={handleSubmit}>
                {props.test.radioQs.map((q) => {
                  return (
                    <div className="form-group">
                      <label>{q.label}</label>
                      {q.answers ? (
                        q.answers.map((ans) => {
                          return (
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id={ans.answer}
                                name={ans.answer}
                                className="custom-control-input"
                              ></input>
                              <label
                                className="custom-control-label"
                                for={ans.answer}
                              >
                                {ans.answer}
                              </label>
                            </div>
                          );
                        })
                      ) : (
                        <div></div>
                      )}
                    </div>
                  );
                })}
                {props.test.selectQs.map((q) => {
                  return (
                    <div className="form-group">
                      <label>{q.label}</label>
                      <select className="custom-select">
                        <option selected>{q.selected}</option>
                        {q.options ? (
                          q.options.map((o) => {
                            return <option value={o.option}>{o.option}</option>;
                          })
                        ) : (
                          <div></div>
                        )}
                      </select>
                    </div>
                  );
                })}
                {props.test.openQs.map((q, i) => {
                  return (
                    <div class="form-group">
                      <label for={"openQ" + i}>{q.label}</label>
                      <br></br>
                      <textarea
                        class="form-control"
                        id={"openQ" + i}
                        rows="1"
                        placeholder="Type your question here"
                      ></textarea>
                    </div>
                  );
                })}
                <p>{"Instruction: " + props.test.instruction}</p>
              </form>
            </div>
          ) : (
            <div className="modal-body">
              {" "}
              <h2> error</h2>
            </div>
          )}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAnswer;
