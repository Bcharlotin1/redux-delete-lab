import React from 'react'

export default function Band({band, deleteBand}) {
    console.log(band)
    const handleClick = ()=>{
        deleteBand(band.id)
      }

    return (
        <div>
            <li
                key={band.id}
                >{band.name}
            </li>
                    
            <button
                onClick={handleClick}
                >Delete
            </button>
        </div>
    )
}

