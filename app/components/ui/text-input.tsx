'use client'

import { Icon } from '@phosphor-icons/react'

interface TextInputProps {
  IconComponent: Icon
  type: 'text' | 'email' | 'password'
  placeholder: string
}

export default function TextInput({
  IconComponent,
  type,
  placeholder,
}: TextInputProps) {
  return (
    <label
      htmlFor="search"
      className="flex-1 bg-gray-600 hover:bg-gray-550
          flex items-center gap-2 rounded pl-2 py-1 border-b-2 border-gray-200 
          focus-within:bg-gray-800 hover:focus-within:bg-gray-800 focus-within:border-b-main-500"
    >
      <IconComponent size={16} weight="bold" />
      <input
        type={type}
        id="search"
        placeholder={placeholder}
        className="w-full bg-transparent border-none focus:outline-none 
            placeholder-gray-200 placeholder-opacity-100 font-light text-sm"
      />
    </label>
  )
}
