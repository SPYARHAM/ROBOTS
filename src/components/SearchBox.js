import React from 'react'
import '../index.css'

export default function SearchBox({searchChange,searchfield}) {
    return (
        <div >
            <h1 >Robo - Friends</h1>
            <input className='container-3' type='search' placeholder='Search Robots'  onChange = {searchChange}/>
           
        </div>
    )
}
