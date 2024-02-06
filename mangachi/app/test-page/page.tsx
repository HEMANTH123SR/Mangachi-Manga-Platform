"use client"
import React, { useState } from "react";
const TestPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = async () => {
    console.log("is cliked two :: ", await isClicked);
  }
  return (
    <div>
      {/* <button onClick={() => {
        console.log("is cliked one :: ", isClicked)
        setIsClicked(!isClicked);
        handleClick()
      }}>This is a button</button> */}
      <button onClick={() => {
        setIsClicked(prevState => {
          console.log("is cliked one :: ", prevState);
          return !prevState;
        });
        handleClick();
      }}>This is a button</button>

    </div>
  );
};

export default TestPage;
