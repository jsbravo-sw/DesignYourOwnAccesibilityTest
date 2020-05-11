import React from "react";
import ModalAnswer from "./ModalAnswer.js";

const ModalConsent = (props) => {
  return (
    <div
      className="modal fade"
      id="modalConsent"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Habeas Data
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
          <div className="modal-body">{props.test.habeas}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              I don't consent
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              I consent
            </button>
            <ModalAnswer test={props.test}></ModalAnswer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConsent;
