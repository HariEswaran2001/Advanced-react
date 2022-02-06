import React, { useState } from "react";

const UseStateBasics = () => {
  const [testing, setTesting] = useState("random title");
  const handleClick = () => {
    if (testing === "random title") {
      setTesting("Hello guys!!!");
    } else {
      setTesting("random title");
    }
  };
  return (
    <>
      <h1>{testing}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
