import "./counter.scss";
import { useState, Fragment } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div className="counter">
        <p className="title">Counter</p>
        <p className="quantity">{count}</p>
        <div className="operators">
          <div
            className="add"
            onClick={() => {
              setCount(count + 1);
            }}>
            +
          </div>
          <div
            className="sub"
            onClick={() => {
              setCount(count - 1);
            }}>
            -
          </div>
          <div
            className="reset"
            onClick={() => {
              setCount(0);
            }}>
            reset
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
