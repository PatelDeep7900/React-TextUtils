
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        const newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Convert in to upperCase!", "success")
    }
    const handleLowClick = ()=>{
        const newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert in to LowerCase!", "success")
    }
    const handleRpClick = ()=>{
        let newText = text.replaceAll(fword,rword);
        setText(newText)
        props.showAlert("Word has been replaced!", "success")
    }
    const handleClrClick = ()=>{
        setText('')
        Findword('')
        Repword('')
        props.showAlert("Text hes been cleared!", "success")
    }
    const handlespaceClick = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra space hes been cleared!", "success")
  }
  const handlecopyClick = ()=>{
    let text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy on clipboard", "success");
}
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleFindChange = (event)=>{
        Findword(event.target.value);
    }
    const handleRplsChange = (event)=>{
        Repword(event.target.value);
    }
    const[text, setText] = useState('');
    const[fword, Findword] = useState('');
    const[rword, Repword ] = useState('');
  return (
   <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8" placeholder='Enter the text...' style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <div className='col-auto'>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Lowercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlespaceClick}>clear space</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopyClick}>copy</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear</button>
       </div>
       <div className="col-auto">
           <input type="text" className="form-control my-3" id="inputtext" placeholder="Find text" onChange={handleFindChange} value={fword} style={{backgroundColor: props.mode==='dark'?'grey':'white'}}/>
           <input type="text" className="form-control my-3" id="inputtext" placeholder="Replace text" onChange={handleRplsChange}  value={rword} style={{backgroundColor: props.mode==='dark'?'grey':'white'}}/>
         <div className="col-auto">
           <button disabled={fword.length===0 && rword.length===0 }  className="btn btn-primary my-1" onClick={handleRpClick}>Replace</button> 
         </div>  
       </div>     
    </div> 
     <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
         <h1>Your text summary:</h1>
         <p>characters: {text.length}</p>
         <p>words: {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
         <p>read time: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
         <h1>Preview</h1>
         <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
     </div> 
   </>

  );
  }