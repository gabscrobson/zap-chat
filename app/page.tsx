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
import { useUserStore } from './lib/userStore'
import Image from 'next/image'

export default function Home() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log('aqui')
      if (user) fetchUserInfo(user.uid)
    })

    return () => {
      unSub()
    }
  }, [fetchUserInfo])

  console.log(currentUser)

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Zap Chat logo"
          height={200}
          width={200}
          className="animate-pulse select-none"
        />
      </div>
    )

  return (
    <>
      {currentUser ? (
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
