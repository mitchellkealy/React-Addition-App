import React from 'react';

const Addition = (props) => {
    return (
        <h1>
            {props.numberOne} + {props.numberTwo} = {props.numberOne + props.numberTwo}
        </h1>
    )
}

export default Addition;