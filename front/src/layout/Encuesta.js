import React from "react";
import { useParams } from "react-router-dom";

const Encuesta = () => {
  var id = useParams().id;
  console.log("QHAT", id);

  return <div className="container"></div>;
};

export default Encuesta;
