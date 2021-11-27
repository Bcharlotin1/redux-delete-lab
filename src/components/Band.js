import React from "react";

const Band = (props) => {

console.log(props)
    let bandArray = props.props.bands
    return(
       <div>
           { bandArray.map(band=>{
            //    debugger
              return(  
                <div>
                    <li
                    key={band.id}
                    >{band.name}
                    </li>
                    
                    <button
                    onClick={props.props.deleteBand(band.id)}
                    >Delete
                    </button>`
                </div>
              )
            
           })}
       </div>
      
       
    )
}

export default Band 