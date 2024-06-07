import { useEffect, useState } from "react";


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
