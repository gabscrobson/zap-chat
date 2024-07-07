'use client'

import Image from 'next/image'
import { useState } from 'react'
import TextInput from './ui/text-input'
import { Key } from '@phosphor-icons/react'

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

  return (
    <div className="flex justify-center items-start gap-52 h-screen bg-gray-800 text-white">
      <div className="flex flex-col items-center gap-5 bg-gray-650 max-w-96 rounded p-7">
        <h2>Login</h2>
        <form className="flex flex-col items-center justify-center gap-5">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
      </div>
      <div className="flex flex-col items-center gap-5 bg-gray-650 max-w-96 rounded p-7">
        <h2>Create an account</h2>
        <form className="flex flex-col items-center justify-center gap-5">
          <label htmlFor="profilePicture">
            <Image
              src={profilePicture.url}
              width={100}
              height={100}
              alt="Upload a profile picture"
            />
            Upload an image
          </label>
          <input
            type="file"
            id="profilePicture"
            className="hidden"
            onChange={handleProfilePictureChange}
          />
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <TextInput
            IconComponent={Key}
            type="password"
            placeholder="Confirm password"
          />
        </form>
      </div>
    </div>
  )
}
