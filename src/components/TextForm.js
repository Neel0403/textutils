import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowClick = () => {
        console.log("Uppercase was clicked")
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event) => {                   // allows to type in the textbox. Sets the text to current value
        console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here')                      //const [count, setCount] = useState(0);
    // setText = ("new Text")                                  // text = "new text" -> This is wrong way 
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Uppercase</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
