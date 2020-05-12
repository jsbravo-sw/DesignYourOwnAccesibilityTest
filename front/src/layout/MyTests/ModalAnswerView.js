import React from "react";
/** 
Consideren utilizar Modales de Bootstrap React https://react-bootstrap.github.io/components/modal/, es más sencillo.
**/
const modalAnswerView = (props) => {
  return (
    <div
      className="modal fade"
      id="modalAnswerView"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Answer
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
          <div className="modal-body">
            {props.answer.map((answer, j) => {
              return (
                <div>
                  <h5>{answer.question}</h5>
                  <h5>{answer.answer}</h5>
                </div>
              );
            })}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modalAnswerView;
