import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    console.log("Upper case was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    console.log("Upper case was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleRandom = () => {
    let newtext =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque, sit aliquid quasi laborum dolore amet aliquam pariatur blanditiis hic incidunt, temporibus adipisci laboriosam atque labore corrupti officia delectus provident placeat! Ipsum, in aut.";
    setText(newtext);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1
          className={`my-3 text-${
            props.inputModeText === "light" ? "dark" : "light"
          }`}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.inputModeText === "light" ? "white" : "#102e5a",
              color: props.inputModeText === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.inputModeText === "light" ? "primary" : "success"
          } mx-1`}
          onClick={handleUpClick}
        >
          Convert to Upper case
        </button>
        <button
          className={`btn btn-${
            props.inputModeText === "light" ? "primary" : "success"
          } mx-1`}
          onClick={handleLoClick}
        >
          Convert to Lower case
        </button>
        <button
          className={`btn btn-${
            props.inputModeText === "light" ? "primary" : "success"
          } mx-1`}
          onClick={handleRandom}
        >
          Generate random text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.inputModeText === "light" ? "dark" : "light"
        }`}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Enter your text to preview it here" : text}</p>
      </div>
    </>
  );
}
