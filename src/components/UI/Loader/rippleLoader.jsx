import React from 'react'

const rippleLoader = (props) => {
    // console.log('color: ', props.color, 'Loading State: ', props.loading);
    return (
        <div className='rippleLoader'>
            {
                props.loading &&
                <div className='lds-ripple'>
                    <div style={{border: `4px solid ${props.color1}`}}></div>
                    <div style={{border: `4px solid ${props.color2}`}}></div>
                </div>
            }
            
        </div>
    )
}

export default rippleLoader
