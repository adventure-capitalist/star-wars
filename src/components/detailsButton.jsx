import React from "react";

const DetailsButton = props => {
  return (
    <div>
      <button onClick={() => props.clicked()} className="detailsButton">
        &gt;
      </button>
    </div>
  );
};

export default DetailsButton;
