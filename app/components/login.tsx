'use client'

import Image from 'next/image'
import { useState } from 'react'
import TextInput from './ui/text-input'
import { Key, Mailbox, User } from '@phosphor-icons/react'
import { toast } from 'react-toastify'

interface ProfilePicture {
  file: File | null
  url: string
}

export default function Login() {
  const [profilePicture, setProfilePicture] = useState<ProfilePicture>({
    file: null,
    url: '/avatar.png',
  })

  function handleProfilePictureChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    if (event.target.files) {
      const file = event.target.files[0]
      const url = URL.createObjectURL(file)
      setProfilePicture({ file, url })
    }
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success('Logged in successfully')
  }

  return (
    <div className="flex justify-center items-center gap-52 h-screen bg-gray-800 text-white">
      <div className="flex flex-col items-center gap-5 bg-gray-700 max-w-72 rounded p-7">
        <h2 className="font-bold text-2xl mb-5">Login</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center gap-5"
        >
          <TextInput IconComponent={Mailbox} type="email" placeholder="email" />
          <TextInput
            IconComponent={Key}
            type="password"
            placeholder="password"
          />
          <button className="w-full bg-main-700 hover:bg-main-600 rounded font-bold p-3">
            Sign In
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center gap-5 bg-gray-700 max-w-72 rounded p-7">
        <h2 className="font-bold text-2xl mb-5">Create an account</h2>
        <form className="flex flex-col items-center justify-center gap-5">
          <label
            htmlFor="profilePicture"
            className="flex items-center w-full justify-between cursor-pointer underline"
          >
            <Image
              src={profilePicture.url}
              width={64}
              height={64}
              alt="Upload a profile picture"
              className="rounded object-cover h-16"
            />
            Upload an image
          </label>
          <input
            type="file"
            id="profilePicture"
            className="hidden"
            onChange={handleProfilePictureChange}
          />

          <TextInput IconComponent={User} type="text" placeholder="username" />

          <TextInput IconComponent={Mailbox} type="email" placeholder="email" />

          <TextInput
            IconComponent={Key}
            type="password"
            placeholder="password"
          />

          <button className="w-full bg-main-700 hover:bg-main-600 rounded font-bold p-3">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
