import React, {useState} from 'react'
import './TextForm.css'

export default function TextForm(props) {
    const upclick = ()=>{
        console.log("upper case button was clicked");
        let updated = text.toUpperCase();
        setText(updated)
    }

    const loclick = ()=>{
        console.log("lower case button was clicked");
        let updated = text.toLowerCase();
        setText(updated)
    }

    const Clear = ()=>{
        console.log("lower case button was clicked");
        
        if (window.confirm("Are you sure you want to clear all contents?")) {
            let updated = '';
            setText(updated)
        }
    }

    const onChangefn = (Event)=>{
        console.log("On change");
        setText(Event.target.value)
    }

    const Copyfn = ()=> {
        console.log('text copied')
        let text = document.getElementById("my-box")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const [text, setText] = useState("");
  return (
    <div >
        <h1 className='mt-4'>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" placeholder="Enter text here" value={text} onChange={onChangefn}id="my-box" rows="5"></textarea>
        </div>
        <div style={{display: 'flex'}}>
            <button onClick={upclick} className='button-56 mx-2'>Convert to upper case</button>
            <button onClick={loclick} className='button-56 mx-2'>Convert to lower case</button>
            <button onClick={Clear} className='button-56 mx-2'>Clear</button>
            <button onClick={Copyfn} className='button-56 mx-2'>Copy to clipboard</button>
        </div>
        <div className='container my-4'>
            <h2>Text analysis</h2>
            {/* Using REGEX to calculate number of words */}
            <p>{text.length} charachters and {text !== '' ? text?.trim()?.split(/\s+/)?.length : 0} words</p>
            <p>Time required to read: {(text.split(" ").length * 0.008).toFixed(3)} minutes</p>
        </div>
    </div>
  )
}