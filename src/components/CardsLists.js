import React from 'react'
import Card from './Card'
import '../index.css'

export default function CardsLists({robots}) {
    const cardArray = robots.map((user,i) => {
         return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div className='container-2'>
            {cardArray}
        </div>
    )
}
