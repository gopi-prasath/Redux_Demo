import React from 'react'
import { buyCake } from '../Redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            {console.log(props)}
            <h1>No. of cakes : {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
