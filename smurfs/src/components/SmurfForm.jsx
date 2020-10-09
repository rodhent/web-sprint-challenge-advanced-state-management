import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/index.js"

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.postSmurf(smurf);
    document.getElementById("smurfForm").reset();
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
    <form id="smurfForm">
      <input
        type="text"
        name="name"
        label="name"
        placeholder="Smurf Name"
        value={props.name}
        onChange={inputHandler}
        className="input"
      />
      <input
        type="text"
        name="age"
        label="age"
        placeholder="Smurf Age"
        value={props.age}
        onChange={inputHandler}
        className="input"
      />
      <input
        type="text"
        name="height"
        label="height"
        placeholder="Smurf Height"
        value={props.height}
        onChange={inputHandler}
        className="input"
      />
      <button onClick={submitHandler} className="btn">
        Your new Smurf
      </button>
    </form>
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postSmurf })(SmurfForm);