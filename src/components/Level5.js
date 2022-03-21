import React, { useEffect, useState } from 'react'

const Level5 = () => {

    let [number, updateNumber] = useState(0)

    useEffect(() => {
        console.log(number)
        // updateNumber += 0
    },[])

    const subtract = () => {
        updateNumber(number -1)
    }

    const add = () => {
        updateNumber(number + 1)
    }

    return(
        <div>
            <h1>Level 5</h1>
            <p><b>Challenge:</b>create an incrementor and decrementor</p>
            
            <div className='button'>
                <button onClick={number <= 0 ? null : subtract}>subtract</button>
                <h3>{number}</h3>
                <button onClick={number >= 20 ? null : add}>add</button>   
            </div>

            <br />
            <p><b>Challenge:</b>create an incrementor and decrementor</p>
            
        </div>
    )
}
export default Level5