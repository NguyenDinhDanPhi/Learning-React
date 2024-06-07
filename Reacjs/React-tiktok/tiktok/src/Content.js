import { useEffect, useState } from "react";

function Content() {

    //1. useEffect(callback)
    // - gọi callback mỗi khi component re-render
    // gọi callback sau khi component thêm element vào Dom
    //2. useEffect(callback, [])
    // chỉ gọi callback 1 lần khi componen mount
    //3. useEffect(callback, [deps])

// ----------------------------------------------------------------
    //1. callbacks luôn được gọi sau khi component mount
    //2. cleanUp funcion luon duoc goi truoc khi component unmount
    const tabs = ["posts","comments", 'albums']
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {setPosts(posts)})
    }, [type])
   
    useEffect(() => {
        const handlerScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handlerScroll)
    // cleanup functions
        return () => {
        window.removeEventListener('scroll', handlerScroll)
        }    
    }, [])
    return (
        <div>
           
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <br/> <br />
            {tabs.map(tab => (
                <button 
                style={type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333'
                } : {}}
                 onClick={() => setType(tab)}>
                    {tab}
                </button>
            ))}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title || post.name}
                    </li>
                ))}
            </ul>

            {showGoToTop && (
                <button 
                style={
                    {
                        color: '#fff',
                        backgroundColor: '#333',
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }
                }>
                    Go to Top
                </button>
            )}
        </div>
        
    );
}

export default Content;
