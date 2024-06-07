import {memo} from "react"
function ContentDemo({count}) {
    console.log("re-render")
    return (
        <div>
            ContentDemo {count}
        </div>
    )
}

export default memo(ContentDemo)