import React from 'react'
import Toggle from '../components/Toggle'

const Ex7 = () => {
    return (
        <div>
            <Toggle>
                <Toggle.On>
                    <div>ON</div>
                </Toggle.On>
                <Toggle.Off>
                    <div>OFF</div>
                </Toggle.Off>
                <Toggle.Button text='toggle' />
            </Toggle>
        </div>
    )
}

export default Ex7