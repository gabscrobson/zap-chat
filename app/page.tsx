import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Chat from './components/chat'
import Detail from './components/detail'
import List from './components/list/list'
import Login from './components/login'

export default function Home() {
  const user = false

  return (
    <>
      {user ? (
        <div className="flex">
          <List />
          <Chat />
          <Detail />
        </div>
      ) : (
        <Login />
      )}
      <ToastContainer position="bottom-right" theme="dark" draggable />
    </>
  )
}
