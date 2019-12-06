import React from 'react';



const PlayerCard = props => {
    console.log(props)
    return (
        <div>
        <div className='players'>
            <div className='cards'>
                <h2>{props.rank}</h2>
                <div>
                <h3>{props.name}</h3>
                <p>{props.country}</p>
                </div>
            </div>
        </div>
        </div>
 )
}

export default PlayerCard;