import {memo} from "react"
function ContentDemo({onIncrease}) {
    console.log("re-render")
    return (
        <div>
            ContentDemo
            <button onClick={onIncrease}>Increase</button>
        </div>
    )
}

export default memo(ContentDemo)