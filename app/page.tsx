'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Chat from './components/chat'
import Detail from './components/detail'
import List from './components/list/list'
import Login from './components/login'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './lib/firebase'

export default function Home() {
  const user = true

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user)
    })

    return () => unSub()
  }, [])

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
