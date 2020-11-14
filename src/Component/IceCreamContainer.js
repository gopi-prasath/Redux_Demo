import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../Redux'

function IceCreamContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            {
                console.log(numOfIceCream)
            }
            <h1>Num of cakes : {numOfIceCream}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
        </div>
    )
}

export default IceCreamContainer
