import "./switch.scss";
import onLamp from "../../assets/on.png";
import offLamp from "../../assets/off.png";
import { useState } from "react";

const Switch = () => {
  const [turn, setTurn] = useState(false);

  const switchHandler = () => {
    if (turn) {
      setTurn(false);
    } else {
      setTurn(true);
    }
  };

  return (
    <div className="switch">
      <img src={turn ? onLamp : offLamp} alt="" className="lamp" /> <br />
      <button className="switch" onClick={switchHandler}>{turn ? "OFF" : "ON"}</button>
    </div>
  );
};

export default Switch;
