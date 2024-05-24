import Image from 'next/image'

export default function Chat() {
  return (
    <div className="flex-1 h-screen flex flex-col gap-2 items-center justify-center border border-gray-900">
      <Image src="/logo.svg" alt="Zap Chat logo" height={100} width={100} />
      <h1 className="text-xl font-bold">Zap Chat</h1>
      <p className="text-gray-300">Select a chat to start messaging</p>
    </div>
  )
}
