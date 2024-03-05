import React, { useEffect } from "react"

const withLogger = (Component) => {

    return (props) => {

        useEffect(() => {
            console.log('component mounted')

            return () => {
                console.log('component unmounted')
            }
        }, [])

        return <Component {...props} />
    }
}

export default withLogger