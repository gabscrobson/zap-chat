import {
  DotsThreeOutline,
  PencilSimple,
  VideoCamera,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import IconButton from '../ui/icon-button'

export default function UserInfo() {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full object-cover"
          src="/avatar.png"
          width={40}
          height={40}
          alt="avatar"
        />
        <h2 className="font-semibold text-lg">John Doe</h2>
      </div>
      <div className="flex gap-3">
        <IconButton IconComponent={DotsThreeOutline} size={20} weight="fill" />
        <IconButton IconComponent={VideoCamera} size={20} weight="regular" />
        <IconButton IconComponent={PencilSimple} size={20} weight="fill" />
      </div>
    </div>
  )
}
