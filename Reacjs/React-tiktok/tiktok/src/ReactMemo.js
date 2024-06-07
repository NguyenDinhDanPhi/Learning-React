import { useState } from "react";
import ContentDemo from "./ContentDemoReactMemo";
//  1. memo() -> Higher Order Component (HOC)
//  2. userCallback() 


function ReactMemo() {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <ContentDemo count= {count} />
        </div>
    )
}

export default ReactMemo