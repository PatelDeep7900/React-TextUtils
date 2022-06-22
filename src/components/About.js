import React from 'react'

export default function About(props) {
  return (
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
          <h1 className='my-3'>About us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}>
         <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils gives you to analyze your text quickly and efficiently.Be it word count, characters count ,word Replacement.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}>
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is free character counter tool that provides isntant  character count and word count statistics for a given text.TextUtils reports the number of words and characters.Thus it is sutable for writing text with word/charecter limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}>
       <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in any web browser such as chrome,Firefox,internet Explorer,Opera.It suits to count character in facebook,blog,books,excel document,pdf document,etc.
      </div>
    </div>
  </div>
</div>
</div>
  )
}
