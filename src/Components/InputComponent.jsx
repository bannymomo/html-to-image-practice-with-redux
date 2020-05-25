import React, { Fragment } from "react";
const Input = (props) => {
  return (
    <Fragment>
      <div>{props.name}</div>
      <input
        className="title-input"
        onChange={(event) => props.handleChange(event, props.attribute)}
        value={props.value}
      />
    </Fragment>
  );
};

export default Input;
