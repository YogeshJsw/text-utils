import React, { useState } from "react";

export default function TextForm(props) {
  //States
  const [text, setText] = useState('')

  const handleUpClick = () => {
    // console.log("UpperCase was clicked")
    if(text.length===0)
      props.showAlert("Please enter some text to convert to UpperCase","warning")
    else
    {
      setText(text.toUpperCase());
      props.showAlert("Converted to UpperCase", "success")
    }
  }

  const handleLoClick = () => {
    if(text.length===0)
      props.showAlert("Please enter some text to convert to LowerCase","warning")
    else
    {
      setText(text.toLowerCase());
      props.showAlert("Converted to LowerCase", "success")
    }
  }

  const handleClearClick = () => {
    if(text.length===0)
      props.showAlert("Text is already empty","warning")
    else
    {
      setText("");
      props.showAlert("Cleared text successfully", "success")
    }
  }
  const handleCopyClick = () => {
    if(text.length===0)
      props.showAlert("No text entered to copy","warning")
    else
    {
      navigator.clipboard.writeText(text)
      props.showAlert("Copied text to clipboard", "success")
    }
  }
  const handleSpaceClick = () => {

    let newText=text.split(/[ ]+/)
    if(newText.join(" ")===text)
    {
      props.showAlert("No extra whitespaces found","warning")
    }
    else
    {
      setText(newText.join(" "));
      props.showAlert("Removed Extra Spaces", "success")
    }
  }

  const handleOnChange = (event) => {
    // console.log("Changed")
    setText(event.target.value)
  }


  return (
    <>
      <div className=" text-dark my-4">

        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#f4f3ee'}} id="myBox" rows="12" ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>
      </div>
      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>You will take {0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read the text</p>
        <h3>Preview:</h3>
        <p>{text.length===0?"Enter some Text above to preview":text}</p>
      </div>
    </>
  );
}
