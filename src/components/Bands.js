import React from "react";
import Band from "./Band";

const Bands = (props) => {

console.log(props)
    let bandArray = props.bands
 
    
    return(
       <div>
           {bandArray.map( band=>{
               debugger
              return(  
                <div>
                  <Band  
                  band={band}
                  deleteBand={props.deleteBand}
                  />
                </div>
              )
            
           })}
       </div>
      
       
    )
}

export default Band 