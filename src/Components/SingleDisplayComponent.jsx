import React from "react";
const SingleDisplay = (props) => {
  if (props.attribute) {
    return (
      <h3>
        {props.name}: {props.attribute}
      </h3>
    );
  } else return null;
};

export default SingleDisplay;
