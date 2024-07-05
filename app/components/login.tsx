'use client'

import Image from 'next/image'
import { useState } from 'react'

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
    <div>
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
      </div>
      <div></div>
      <div>
        <h2>Create an account</h2>
        <form>
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
        </form>
      </div>
    </div>
  )
}
