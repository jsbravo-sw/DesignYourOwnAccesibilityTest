import React from "react";

const Home = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container" id="jumbo">
          <h1 className="display-4">Accesibility testing made easy</h1>
          <p className="lead">
            Create your own accesibility test or test other people's websites
            all in the same place!
          </p>
        </div>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary">
          Get testing
        </button>
        <button type="button" className="btn btn-primary">
          Create my own test
        </button>
      </div>
    </div>
  );
};

export default Home;
