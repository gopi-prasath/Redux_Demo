import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../Redux'

function NewCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

    const [num, setNum] = useState(1)

    return (
        <div>
            <h1>Num of cakes : {numOfCakes}</h1>
            <input type="text" value={num} onChange={e => setNum(e.target.value)} />
            <button onClick={() => dispatch(buyCake(num))}>Buy {num} Cake</button>
        </div>
    )
}

export default NewCakeContainer
