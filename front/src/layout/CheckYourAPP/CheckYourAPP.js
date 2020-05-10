import React from "react";

const CheckYourAPP = (props) => {
  const url = props.url;
  const validateURL = () => {
    if (url == null) return false;
    if (url.startsWith("http") || url.startsWith("http")) return true;
    return false;
  };

  return (
    <div>
      {validateURL() ? (
        <div className="row">
          <div className="col-md-12">
            <iframe title="testApp" src={url} height="400" width="500"></iframe>
          </div>
        </div>
      ) : (
        <div>
          {url ? (
            <div className="alert alert-danger" role="alert">
              The URL is not valid. Try again!
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckYourAPP;
