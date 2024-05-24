import { MagnifyingGlass, Plus } from '@phosphor-icons/react/dist/ssr'
import IconButton from '../ui/icon-button'

export default function ChatList() {
  return (
    <div className="flex flex-col flex-grow overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        <label
          htmlFor="search"
          className="flex-1 bg-gray-600 hover:bg-gray-550
          flex items-center gap-2 rounded pl-2 py-1 border-b-2 border-gray-200 
          focus-within:bg-gray-800 hover:focus-within:bg-gray-800 focus-within:border-b-main-500"
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
        <IconButton IconComponent={Plus} size={16} weight="bold" />
      </div>
      <div className="h-full p-2 overflow-y-auto">
        <ul className="w-full">
          <li className="flex items-center gap-4 p-3 rounded hover:bg-gray-650 select-none relative">
            <div className="min-w-11 h-11 bg-red-500 rounded-full"></div>
            <div className="flex-grow flex flex-col min-w-0">
              <div className="flex gap-1 justify-between items-center">
                <h4 className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap flex-grow">
                  John Doe
                </h4>
                <span className="text-xs text-gray-300 flex-shrink-0">
                  16:29
                </span>
              </div>
              <div className="flex gap-1 justify-between items-center">
                <p className="text-sm text-gray-300 overflow-hidden whitespace-nowrap text-ellipsis flex-grow">
                  Hello, how are you?
                </p>
              </div>
            </div>
          </li>
        </ul>

        <ul className="w-full">
          <li className="flex items-center gap-4 p-3 rounded hover:bg-gray-650 select-none relative">
            <div className="min-w-11 h-11 bg-blue-500 rounded-full"></div>
            <div className="flex-grow flex flex-col min-w-0">
              <div className="flex gap-1 justify-between items-center">
                <h4 className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap flex-grow">
                  Lucca Lima
                </h4>
                <span className="text-xs text-main-500 flex-shrink-0">
                  14:36
                </span>
              </div>
              <div className="flex gap-1 justify-between items-center">
                <p className="text-sm text-gray-300 overflow-hidden whitespace-nowrap text-ellipsis flex-grow">
                  Filha da puta desgraçado, voce roubou meu aplicativo
                </p>
                <div className="ml-2 w-5 h-4 bg-main-500 text-gray-900 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  3
                </div>
              </div>
            </div>
          </li>
        </ul>

        <ul className="w-full">
          <li className="flex items-center gap-4 p-3 rounded hover:bg-gray-650 select-none relative">
            <div className="min-w-11 h-11 bg-green-500 rounded-full"></div>
            <div className="flex-grow flex flex-col min-w-0">
              <div className="flex gap-1 justify-between items-center">
                <h4 className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap flex-grow">
                  Jane Doe
                </h4>
                <span className="text-xs text-main-500 flex-shrink-0">
                  Yesterday
                </span>
              </div>
              <div className="flex gap-1 justify-between items-center">
                <p className="text-sm text-gray-300 overflow-hidden whitespace-nowrap text-ellipsis flex-grow">
                  Thank you for the opportunity
                </p>
                <div className="ml-2 w-5 h-4 bg-main-500 text-gray-900 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  1
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
