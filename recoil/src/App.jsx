//RecoilRoot,atom,useRecoilState,useRecoilValue,useSetRecoilState,selector
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import {countAtom,evenSelector} from "./store/atoms/count";

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  return (
    <>
      <CountRendered />
      <Button />
    </>
  );
}

function CountRendered() {
  const count= useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);
  console.log((isEven));
  return (
    <>
      <h3>{count}</h3>
      <p>{isEven?"is even":"is odd"}</p>
    </>
  );
}

function Button() {
const setCount = useSetRecoilState(countAtom);
console.log("re rendered");
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>increase</button>
      <button onClick={() => setCount((count) => count - 1)}>decrease</button>
    </>
  );
}

export default App;
