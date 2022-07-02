import React, {useState} from 'react'

export default function Textarea(props) {
    const [text, setText] = useState('');

    const handleUpclick = ()=>{
       let newText = text.toUpperCase();
       setText(newText);
       props.showALert("success", "Converted to UpperCase!");
    }

    const handleLoclick = ()=>{
       let newText = text.toLowerCase();
       setText(newText);
       props.showALert("success", "Converted to LowerCase!");
    } 

    const handleclearclick = ()=>{
       let newText = '';
       setText(newText);
       props.showALert("success", "Text Cleared!");
    } 

    const handlespeechclick = ()=>{
       let newText = new SpeechSynthesisUtterance();
       newText.text = text;
       window.speechSynthesis.speak(newText);
       props.showALert("success", "Wait a second...");
    } 

    const handlechange = (event)=>{
        setText(event.target.value);
    } 
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handlechange} style = {{backgroundColor : props.mode === 'dark'? '#041E42' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-1" onClick={handleUpclick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoclick}> Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handlespeechclick}> Speak</button>
                <button className="btn btn-primary mx-1" onClick={handleclearclick}> clear</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p><b>{text.split(" ").length -1}</b> words and <b>{text.length}</b> characters.</p>
            <p><b>{ 0.008 * (text.split(" ").length -1)}</b> Minutes read</p>
            <h2>Preview Your Text</h2>
            <p>{text.length>0 ? text: 'Enter something in the textbox above to preview it here'}</p>
        </div>
        </>
    )
}
