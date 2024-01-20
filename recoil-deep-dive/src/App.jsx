
import { RecoilRoot,useRecoilValue } from 'recoil'
import './App.css'
import { notificationAtom } from './atoms'
import {  allNotificationCountSelector } from './selectors';

function App() {
  return (
    <RecoilRoot>
    <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){

  const notifications= useRecoilValue(notificationAtom);
  const {network,jobs,messages,notification}=notifications
  const allCount=useRecoilValue(allNotificationCountSelector)
  return(<>
  <button>Home</button>
      
      <button>My Network({network>=100 ? "99+":network })</button>
      <button>Jobs({jobs>=100 ? "99+":jobs })</button>
      <button>Messaging({messages>=100 ? "99+":messages })</button>
      <button>Notifications({notification>=100 ? "99+":notification }) </button>

      <button>Me({allCount})</button>
  </>)
}
export default App
