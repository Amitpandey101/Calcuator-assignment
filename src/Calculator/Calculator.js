import React from 'react'
import { useState } from 'react'
import "./calculator.css"
const Calculator = () => {
    const [result,setResult]=useState("")
    const clickHandler=(e)=>{
      setResult(result.concat(e.target.value))
  
    }
    const clearDisplay=()=>{
      setResult("")
  
    }
    const clickCalculate=()=>{
      setResult(eval(result).toString())
  
    }
  return (
    <>
    <h1 className='centre'> Calculator</h1>
    <div  className='container-sm' style={{width:"30vw"}}>
       <input type="text" placeholder="0" value={result} className="form-control my-4" style={{width:"22vw",border:"2px solid black"}}/>
       <div >
      <input type="button" value="9" className="btn"  onClick={clickHandler}/>
      <input type="button" value="8" className="btn" onClick={clickHandler}/>
      <input type="button" value="7" className="btn" onClick={clickHandler}/>
      <input type="button" value="6" className="btn" onClick={clickHandler}/>
  
      </div>
      <div>
    
      <input type="button" value="5" className="btn" onClick={clickHandler}/>
      <input type="button" value="4" className="btn" onClick={clickHandler}/>
      <input type="button" value="3" className="btn" onClick={clickHandler}/>
      <input type="button" value="2" className="btn" onClick={clickHandler}/>
      </div>
      <div>
      <input type="button" value="1" className="btn" onClick={clickHandler}/>
      <input type="button" value="0" className="btn" onClick={clickHandler}/>
      <input type="button" value="." className="btn" onClick={clickHandler}/>
      <input type="button" value="+" className="btn" onClick={clickHandler}/>
      </div>
      <div>
      <input type="button" value="-" className="btn" onClick={clickHandler}/>
      <input type="button" value="*" className="btn" onClick={clickHandler}/>
      <input type="button" value="/" className="btn" onClick={clickHandler}/>
      <input type="button" value="%" className="btn" onClick={clickHandler}/>
      </div>
      <input type="button" value="C" className="btn" style={{width:"134px"}} onClick={clearDisplay}/>
      <input type="button" value="=" className="btn" style={{width:"133px"}}  onClick={clickCalculate}/>
   

    </div>
   

 </>
  )
}

export default Calculator
