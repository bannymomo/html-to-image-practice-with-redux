import React, { Fragment } from "react";
const ListDisplay = (props) => {
  const content =
    props.attribute &&
    props.attribute.split(";").map((item, index) => {
      return <li key={index}>{item}</li>;
    });
  if (props.attribute) {
    return (
      <Fragment>
        <div className="sub-title">{props.name}</div>
        <div>{content}</div>
      </Fragment>
    );
  } else {
    return null;
  }
};

export default ListDisplay;
