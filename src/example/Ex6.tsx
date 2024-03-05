import React from 'react'

// Passing the Original Component as a Parameter

// const withClickTracking = (WrappedComponent: any) => {
//     return (props: any) => {

//         const handleClick = () => {
//             console.log('click tracked:', props.trackingInfo)
//         }

//         return (
//             <div className='wrap' onClick={handleClick}>
//                 <WrappedComponent {...props} />
//             </div>
//         )

//     }
// }

// Render Props Approach
const WithClickTracking = (props: any) => {

    const handleClick = () => {
        console.log('click tracked:', props.trackingInfo)
    }

    return (
        <div className='wrap' onClick={handleClick}>
            {props.children}
        </div>
    )

}

const MyButton = ({ label }) => {
    return <button>{label}</button>
}

// const Ex6 = () => {

//     const ButtonWithTracking = withClickTracking(MyButton)

//     return (
//         <div>
//             <ButtonWithTracking label='Click' trackingInfo='btn1' />
//         </div>
//     )
// }

const Ex6 = () => {
    
    return (
        <div>
            <WithClickTracking trackingInfo='btn1'>
                <MyButton label='Click' />
            </WithClickTracking>
        </div>
    )
}

export default Ex6