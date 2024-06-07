import { useState, useMemo } from "react";

function UseMeMoDemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProduct] = useState([]);

    const handleSubmit = () => {
        setProduct([...products, {
            name,
            price: parseInt(price),
        }]);
        console.log(products)
    }
    const total = useMemo(() => {
       const result = products.reduce((result, prod) => 
            result + prod.price, 0
        )
        return result;
    }, [products]);
    return (
        <div style={{
            padding: '10px 32px'
        }}>
            <input value={name}
                    placeholder="Enter name..."
                    onChange={e => setName(e.target.value)}/>
            <br/>
            <input value={price} 
                    placeholder="Enter price"
                    onChange={e => setPrice(e.target.value)}/>
            <br/>
            <button onClick={handleSubmit}>add</button>
            <br/>
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}    
            </ul>  
        </div>
    )
}

export default UseMeMoDemo