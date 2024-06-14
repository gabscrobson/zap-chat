'use client'

import Image from 'next/image'
import IconButton from './ui/icon-button'
import {
  DotsThreeOutline,
  Image as ImageIcon,
  Microphone,
  Phone,
  Smiley,
  VideoCamera,
} from '@phosphor-icons/react/dist/ssr'
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react'
import { useState } from 'react'

export default function Chat() {
  return (
    <div className="flex-1 flex flex-col h-screen max-w-5xl">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  )

  return <NoChatSelected />
}

function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-600 bg-gray-700">
      <div className="flex items-center gap-3">
        <div className="min-w-11 h-11 bg-red-500 rounded-full"></div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg">John Doe</h2>
          <p className="text-gray-300 text-sm">Online</p>
        </div>
      </div>
      <div className="flex gap-3">
        <IconButton IconComponent={Phone} size={24} weight="regular" />
        <IconButton IconComponent={VideoCamera} size={24} weight="regular" />
        <IconButton IconComponent={DotsThreeOutline} size={24} weight="fill" />
      </div>
    </div>
  )
}

function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
      <div className="flex flex-col items-center">
        <div className="bg-gray-700 px-2 py-1 rounded-lg max-w-[70%]">
          <p className="text-xs">Today</p>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div className="bg-gray-600 p-2 rounded-lg max-w-[70%]">
          <p className="text-sm">Hello, how are you?</p>
        </div>
        <span className="text-xs text-gray-400 mt-1">16:29</span>
      </div>

      <div className="flex flex-col items-start">
        <div className="bg-gray-600 p-2 rounded-lg max-w-[70%]">
          <p className="text-sm">
            Hello, how are you? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus, voluptatibus sequi eligendi totam
            reiciendis, odit iure, deserunt ex ducimus illum labore ea autem
            eaque corporis consequuntur quasi eveniet vel reprehenderit.
          </p>
        </div>
        <span className="text-xs text-gray-400 mt-1">16:29</span>
      </div>

      <div className="flex flex-col items-end">
        <div className="bg-main-800 p-2 rounded-lg max-w-[70%]">
          <p className="text-sm">Im fine, thank you!</p>
        </div>
        <span className="text-xs text-gray-400 mt-1">16:30</span>
      </div>

      <div className="flex flex-col items-end">
        <div className="bg-main-800 p-2 rounded-lg max-w-[70%]">
          <Image src="/example.webp" width={400} height={400} alt="image" />
        </div>
        <span className="text-xs text-gray-400 mt-1">16:30</span>
      </div>
    </div>
  )
}

function ChatInput() {
  const [text, setText] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  function toggleEmojiPicker() {
    setShowEmojiPicker((prev) => !prev)
  }

  function handleEmojiClick(e: EmojiClickData) {
    setText((prev) => prev + e.emoji)
  }

  return (
    <div className="flex items-center gap-3 p-4 border-t border-gray-600 bg-gray-700">
      <div className="flex gap-2">
        <div className="relative">
          <IconButton
            IconComponent={Smiley}
            size={24}
            onClick={toggleEmojiPicker}
          />
          <div className="absolute bottom-12 left-0">
            <EmojiPicker
              open={showEmojiPicker}
              onEmojiClick={handleEmojiClick}
              theme={Theme.DARK}
            />
          </div>
        </div>
        <IconButton IconComponent={ImageIcon} size={24} />
      </div>
      <input
        type="text"
        placeholder="Message"
        className="flex-1 bg-transparent border-none focus:outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton IconComponent={Microphone} size={22} />
    </div>
  )
}

function NoChatSelected() {
  return (
    <div className="flex-1 h-screen max-w-4xl flex flex-col gap-2 items-center justify-center">
      <Image src="/logo.svg" alt="Zap Chat logo" height={100} width={100} />
      <h1 className="text-xl font-bold">Zap Chat</h1>
      <p className="text-gray-300">Select a chat to start messaging</p>
    </div>
  )
}
