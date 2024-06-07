import { useRef, useState, useEffect } from "react"
function UseRefDemo() {
    const [count, setCount] = useState(60)

    let timerId = useRef(99)
    const preCount = useRef()
    useEffect(() => {
         preCount.current = count
    }, [count])

    const handleStart = () => {
       timerId.current = setInterval(() => {
            setCount(prev => prev -1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }
    return (
        <div style={{padding: 20}}>
            <h1> {count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRefDemo