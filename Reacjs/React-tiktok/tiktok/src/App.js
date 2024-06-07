import { useState } from "react";
import Content from './tutorial/Content'
import FakeChatApp from './tutorial/FakeChatApp';
import UseRefDemo from './tutorial/UseRefDemo';
import ReactMemo from './tutorial/ReactMemo';
import UseMeMoDemo from './tutorial/UseMemoDemo';
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
        <UseMeMoDemo />
        

    </div>
  );
}

export default App;
