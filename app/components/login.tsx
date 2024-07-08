'use client'

import Image from 'next/image'
import { useState } from 'react'
import TextInput from './ui/text-input'
import { Key, Mailbox, Spinner, User } from '@phosphor-icons/react'
import { toast } from 'react-toastify'
import { z } from 'zod'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import { auth, db } from '../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'
import upload from '../lib/upload'

interface ProfilePicture {
  file: File | null
  url: string
}

export default function Login() {
  const [profilePicture, setProfilePicture] = useState<ProfilePicture>({
    file: null,
    url: '/avatar.png',
  })
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isSigningUp, setIsSigningUp] = useState(false)

  function handleProfilePictureChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    if (event.target.files) {
      const file = event.target.files[0]
      const url = URL.createObjectURL(file)
      setProfilePicture({ file, url })
    }
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoggingIn(true)

    const loginFormSchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    })

    const formData = new FormData(e.currentTarget)
    const formDataValues = Object.fromEntries(formData) as Record<
      string,
      string
    >

    try {
      loginFormSchema.parse(formDataValues)
    } catch (error) {
      setIsLoggingIn(false)
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors[0].message
        return toast.error(errorMessage)
      }
    }

    const { email, password } = formDataValues

    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      console.log(res)
      toast.success('Logged in successfully')
    } catch (error) {
      toast.error('Failed to log in')
    }

    setIsLoggingIn(false)
  }

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSigningUp(true)

    const signupFormSchema = z.object({
      username: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
    })

    const formData = new FormData(e.currentTarget)
    const formDataValues = Object.fromEntries(formData) as Record<
      string,
      string
    >

    try {
      signupFormSchema.parse(formDataValues)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors[0].message
        setIsSigningUp(false)
        return toast.error(errorMessage)
      }
    }

    const { username, email, password } = formDataValues

    try {
      const promises = []

      promises.push(createUserWithEmailAndPassword(auth, email, password))

      let imgUrl = ''
      const MAX_SIZE = 5 * 1024 * 1024 // 5MB in bytes
      if (profilePicture.file != null) {
        if (profilePicture.file.size > MAX_SIZE) {
          throw new Error('Profile picture size exceeds the 5MB limit.')
        }
        promises.push(upload(profilePicture.file))
      }

      const promisesRes = await Promise.all(promises)

      const res = promisesRes[0] as UserCredential
      if (profilePicture.file != null) {
        imgUrl = promisesRes[1] as string
      }

      await setDoc(doc(db, 'users', res.user.uid), {
        username,
        email,
        id: res.user.uid,
        blocked: [],
        chats: [],
        profilePicture: imgUrl,
      })

      toast.success('Signed up successfully')
    } catch (error) {
      toast.error('Failed to sign up')
    }
    setIsSigningUp(false)
  }

  return (
    <div className="flex justify-center items-center gap-52 h-screen bg-gray-800 text-white">
      <div className="flex flex-col items-center gap-5 bg-gray-700 max-w-72 rounded p-7">
        <h2 className="font-bold text-2xl mb-5">Login</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center gap-5"
        >
          <TextInput
            IconComponent={Mailbox}
            type="email"
            name="email"
            placeholder="email"
          />
          <TextInput
            IconComponent={Key}
            type="password"
            name="password"
            placeholder="password"
          />
          <button
            disabled={isLoggingIn}
            className="flex justify-center items-center w-full bg-main-700 hover:bg-main-600 rounded font-bold h-12"
          >
            {isLoggingIn ? (
              <Spinner size={26} className="animate-spin text-white h-full" />
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center gap-5 bg-gray-700 max-w-72 rounded p-7">
        <h2 className="font-bold text-2xl mb-5">Create an account</h2>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col items-center justify-center gap-5"
        >
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

          <TextInput
            IconComponent={User}
            type="text"
            name="username"
            placeholder="username"
          />

          <TextInput
            IconComponent={Mailbox}
            type="email"
            name="email"
            placeholder="email"
          />

          <TextInput
            IconComponent={Key}
            type="password"
            name="password"
            placeholder="password"
          />

          <button
            disabled={isSigningUp}
            className="flex justify-center items-center w-full bg-main-700 hover:bg-main-600 rounded font-bold h-12"
          >
            {isSigningUp ? (
              <Spinner size={26} className="animate-spin text-white h-full" />
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
