import React, { useState } from "react";
import PropTypes from "prop-types";

Couter.propTypes = {};

function Couter(props) {
  const [count, setCouter] = useState(0);

  return (
    <div>
      {count}

      <button
        onClick={() => {
          setCouter((x) => x + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCouter((x) => x - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Couter;
