import React from 'react'
import '../index.css';

const Card =(props)=> {
    const {id,name,email} = props;
    return (
        <div className='container'>
            <div  >
              <img alt='robots' src={`https://robohash.org/${id}`} />
            </div>
            <div className='font'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;
