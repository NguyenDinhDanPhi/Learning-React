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
    const tabs = ["posts","comments", 'albums']
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {setPosts(posts)})
    }, [type])
   

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
        </div>
        
    );
}

export default Content;
