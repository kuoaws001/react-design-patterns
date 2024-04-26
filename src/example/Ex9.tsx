import React, { useRef, memo, useState, useCallback } from 'react'

const ComponentA = memo(({ name, cb }: { name: string; cb?: Function }) => {
    const count = useRef(0);
    count.current++;

    return (
        <div>{`Ref Count: ${count.current}`}</div>
    )
})

const Ex9 = () => {
    const [val, setVal] = useState("");

    const handleChange = (e: any) => {
        setVal(e.target.value)
    }

    const handleSomething = useCallback(() => { }, []);

    // const handleSomething = () => {}

    return (
        <div>
            <input type="text" onChange={handleChange} />

            <ComponentA name='orange' cb={handleSomething} />
        </div>
    )
}

export default Ex9

// memo, useCallback 