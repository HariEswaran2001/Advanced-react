import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4px 0" }}>
        <h2>regular count</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(reset)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <section style={{ margin: "4px 0" }}>
          <h2>More complex Number</h2>
          <h1>{value}</h1>
          <button className="btn" onClick={complexIncrease}>
            Increase later
          </button>
        </section>
      </section>
    </>
  );
};

export default UseStateCounter;
