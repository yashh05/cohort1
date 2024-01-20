
import { RecoilRoot,useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from './atoms'
import {  allNotification } from './selectors';

function App() {
  return (
    <RecoilRoot>
    <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){

  const notification= useRecoilValue(notificationAtom);
  const messages= useRecoilValue(messagesAtom);
  const jobs= useRecoilValue(jobsAtom);
  const network= useRecoilValue(networkAtom);
  
  const allCount=useRecoilValue(allNotification)
  return(<>
  <button>Home</button>
      
      <button>My Network({network>=100 ? "99+":network })</button>
      <button>Jobs({jobs>=100 ? "99+":jobs })</button>
      <button>Messaging({messages>=100 ? "99+":messages })</button>
      <button>Notifications({notification>=100 ? "99+":notification })</button>

      <button>Me({allCount})</button>
  </>)
}
export default App
