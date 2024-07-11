'use client'

import Image from 'next/image'
import IconButton from '../ui/icon-button'
import { useUserStore } from '@/app/lib/userStore'
import { SignOut, DotsThreeOutline } from '@phosphor-icons/react'
import { signOut } from 'firebase/auth'
import { auth } from '@/app/lib/firebase'

export default function UserInfo() {
  const { currentUser } = useUserStore()

  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full object-cover h-10"
          src={currentUser!.profilePicture || '/avatar.png'}
          width={40}
          height={40}
          alt="avatar"
        />
        <h2 className="font-semibold text-lg">{currentUser!.username}</h2>
      </div>
      <div className="flex gap-3">
        <IconButton IconComponent={DotsThreeOutline} size={20} weight="fill" />
        <IconButton
          IconComponent={SignOut}
          size={20}
          weight="regular"
          onClick={() => {
            signOut(auth)
          }}
        />
      </div>
    </div>
  )
}
