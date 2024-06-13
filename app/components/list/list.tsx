import ChatList from './chat-list'
import UserInfo from './user-info'

export default function List() {
  return (
    <div className="flex flex-col bg-gray-700 border-r border-gray-600 w-3/12 min-w-72 max-w-96 h-screen">
      <UserInfo />
      <ChatList />
    </div>
  )
}
