import { useState } from "react";
import Content from './Content'
import FakeChatApp from './FakeChatApp';
import UseRefDemo from './UseRefDemo';
import ReactMemo from './ReactMemo';
function App() {
  const [counter, setCounter] = useState(0);
  const handlerInterceptor = () => {
    setCounter(counter + 1);
  }
  // two way binding
  const [name, setName] = useState('')
  // Contnet
   const [show, setShow] = useState(false)

  return (
    <div className="App">
        <h1> {counter}</h1>
        <button onClick={handlerInterceptor}>Click me</button>
        <br />
        <input value={name} onChange={ e => setName(e.target.value)} />
        <button onClick={() => {setName('Phi so handsome')}}>Change</button>
        <br/> <br />
        <button onClick={() => {setShow(!show)}}>Toggle</button>
        {show && <Content />}
        <FakeChatApp /> <br/> 
        <UseRefDemo /> 
        <ReactMemo />

    </div>
  );
}

export default App;
