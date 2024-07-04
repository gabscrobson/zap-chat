'use client'

import { CaretUp, DownloadSimple, File } from '@phosphor-icons/react'
import Image from 'next/image'
import IconButton from './ui/icon-button'

export default function Detail() {
  return (
    <div className="w-3/12 border border-l border-gray-600">
      <div className="p-5 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <span>Chat Settings</span>
          <CaretUp size={22} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span>Shared photos</span>
            <CaretUp size={22} />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/example.webp"
                  width={40}
                  height={40}
                  alt="image"
                  className="rounded object-cover w-10 h-10"
                />
                <span className="text-gray-200">image.png</span>
              </div>
              <IconButton IconComponent={DownloadSimple} size={22} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span>Shared files</span>
            <CaretUp size={22} />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <File size={24} />
                <span className="text-gray-200">file.pdf</span>
              </div>
              <IconButton IconComponent={DownloadSimple} size={22} />
            </div>
          </div>
        </div>

        <button className="px-3 py-2 bg-red-500 hover:bg-red-400 rounded transition-colors w-full">
          Block user
        </button>
      </div>
    </div>
  )
}
