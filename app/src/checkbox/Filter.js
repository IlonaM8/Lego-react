import { useEffect } from 'react';
import "./productPage.css"

function Filter({setActive, active, setFiltered, data }){
    
    return(
        <div>
            <button onClick={() => console.log(setActive(data))} className='btn'>All</button>
            <button onClick={() => setActive(1)} className='btn'>Home decorer</button>
            <button onClick={() => console.log(setActive(2))} className='btn'>Set</button>
        </div>
    )
}


export default Filter;
