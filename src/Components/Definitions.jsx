import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, language }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span>Type Something.....</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((ele) =>
            ele.definitions.map((def) => (
              <div className="definition">
                <p>{def.definition}</p>
              </div>
            )
            )
          )
        )
      )}
    </div>
  );
};

export default Definitions;
