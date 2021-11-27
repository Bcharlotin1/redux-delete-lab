import React from "react";

const Band = (props) => {
    console.log(props.props.bands)

    let bandArray = props.props.bands
   
    return(
       <div>
           {bandArray.map(band=>{
              return(  
                <li
                key={band.id}
                >{band.name}
                </li>
              )
           })}
       </div>
      
       
    )
}

export default Band 