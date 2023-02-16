import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <p>あなたは{count}回クリックしました。</p>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </>
  );
}

export default App;
