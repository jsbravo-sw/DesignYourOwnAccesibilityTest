import React, { useRef, useState } from "react";
import CheckYourAPP from "./CheckYourAPP.js";
import GenerateAnnonymousLink from "./GenerateAnnonymousLink.js";

const CheckYourAPPForm = (props) => {
  const formRef = useRef();
  const [url, setUrl] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    console.log(form);
    const url = form.URL.value;
    console.log(url);
    setUrl(url);
  };

  const isLogin = () => {
    const login = props.user;
    if (login == null) return false;
    return true;
  };

  return (
    <div className="container">
      {!isLogin() ? (
        <div className="alert alert-danger" role="alert">
          You need to be login to do your own test
        </div>
      ) : (
        <div>
          <div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Insert your application URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="URL"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <CheckYourAPP url={url}></CheckYourAPP>
          <br />
          <GenerateAnnonymousLink></GenerateAnnonymousLink>
        </div>
      )}
    </div>
  );
};

export default CheckYourAPPForm;
