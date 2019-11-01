import React from 'react';



const PlayerCard = props => {
    console.log(props)
    return (
       <div>
           <h1>{props.rank}</h1>
           <h3>{props.name}</h3>
        <p>{props.country}</p>
       </div>
 )
}

export default PlayerCard;