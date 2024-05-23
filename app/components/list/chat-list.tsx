import { MagnifyingGlass, Plus } from '@phosphor-icons/react/dist/ssr'
import IconButton from '../ui/icon-button'

export default function ChatList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 p-4">
        <label
          htmlFor="search"
          className="flex-1 bg-gray-600 :not(:focus-within):hover:bg-gray-550 
          flex items-center gap-2 rounded pl-2 py-1 border-b-2 border-gray-200 
          focus-within:bg-gray-800 focus-within:border-b-main-500"
        >
          <MagnifyingGlass size={16} weight="bold" />
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="w-full bg-transparent border-none focus:outline-none 
            placeholder-gray-200 placeholder-opacity-100 font-light text-sm"
          />
        </label>
        <IconButton
          IconComponent={Plus}
          size={16}
          weight="bold"
          className="text-gray-200"
        />
      </div>
    </div>
  )
}
