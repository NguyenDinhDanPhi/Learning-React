import { useState, useCallback } from "react";
import ContentDemo from "./ContentDemoReactMemo";
//  1. memo() -> Higher Order Component (HOC)
//  2. userCallback() 


function ReactMemo() {
    const [count, setCount] = useState(0)
    const increase = useCallback( () => {
        setCount(count => count + 1)
    },[])
    return(
        <div>
            <h1>{count}</h1>
            {/* cmt để làm useCallback */}
            {/* <button onClick={increase}>Increase</button> */}
            <ContentDemo onIncrease= {increase} />
        </div>
    )
}

export default ReactMemo