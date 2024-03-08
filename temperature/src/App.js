import React, { useState } from 'react';
import Function from './Function';
import Class from './Class';


function App() {
 
  const [ activeIndex,setIndex ]= useState(0);

  const nextSlide = ()=> {
    setIndex(activeIndex);
    if (activeIndex === 1) {
      setIndex(0);
    } else {
      setIndex(1);
    }
  }

  let activeComponent;

  if (activeIndex === 0) {
    activeComponent = <Function/>;
  } else if (activeIndex === 1) {
    activeComponent = <Class/>;
  }

  return (
    <>
    
    <div style={{
      flexDirection:"row"
      }}>
    <h2 style={{
      height:"50px",
      margin:"auto 0",
      marginLeft:"50px"
    }}>

      
    </h2>
    {activeComponent}
    <h2 style={{
      height:"50px",
      marginTop:"25px",
      marginRight:"50px"
    }}>
      
      <button style={
      {
        background: "#3B71CA",
        color: "white",
        fontWeight: "bold",
        borderRadius: "20px",
        padding:"10px 14px",
        fontSize:"20px",
		    marginLeft:"50px",		
		 
      }
    } onClick={()=>nextSlide()}>Switch</button>
    </h2>
    </div>
 
    </>
  )
}

export default App;