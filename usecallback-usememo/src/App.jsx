import { memo, useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  const abc=useCallback(()=>{
    console.log("rendering");
    return 12;
  },[])

  // function def(){
  //   console.log("def");
  // }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>increase</button>
      <button onClick={() => setCount(Math.max(count-1,0))}>decrease</button> 
      <Counting a={abc} />
    </>
  )
}

const Counting=memo( function Counting(props){
   console.log(props.a())
})

export default App
