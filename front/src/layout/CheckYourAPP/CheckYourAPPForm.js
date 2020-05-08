import React, { useRef, useState } from "react";
import CheckYourAPP from "./CheckYourAPP.js";

const CheckYourAPPForm = () => {
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

  return (
    <div className="container">
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
    </div>
  );
};

export default CheckYourAPPForm;
