import "./onTextChange.scss";
import { useState } from "react";

const OntextChange = () => {
  const [text, setText] = useState("");

  return (
    <div className="textChange">
      <div className="textChange_title">On Text Change</div>
      <input
        type="text"
        className="text_field"
        placeholder="Type text..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="typedText">{text}</div>
    </div>
  );
};

export default OntextChange;
