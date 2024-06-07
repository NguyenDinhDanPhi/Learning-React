import { useEffect, useState } from "react";

//  sự khác nhau của useEffect và useLayoutEffect
// useEffect
// 1. Cập nhật state
// 2. Cập nhật DOM (mutated)
// 3. Rẹnder UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback
// -----------------------------------

// useLayoutEffect
// 1. Cập nhật state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. GỌi useLayoutEffect callback (sync)
// 5. Reander Ui
const lessons = [
    {
        id: 1,
        name: "React js la gi?"
    },
    {
        id: 2,
        name: "SPA/MPA la gi?"
    },
    {
        id: 3,
        name: "Arrow funcion"
    }
]
function FakeChatApp () {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleCmt = (detail) => {
            console.log(detail)
        }
        window.addEventListener(`lesson ${lessonId}`, handleCmt)
        return () => {
            window.removeEventListener(`lesson ${lessonId}`, handleCmt)
        }
    }, [lessonId])
    return (
        <div>
            <h1>Fake Chat App</h1> <br /> 
            {lessons.map(lesson => (
                <li key={lesson.id} 
                    style={{
                        color: lessonId === lesson.id? 'orange' : '#333',
                    }}
                    onClick={() => setLessonId(lesson.id)}>
                    {lesson.name}
                </li>
            ))}
        </div>
    )
}

export default FakeChatApp;
