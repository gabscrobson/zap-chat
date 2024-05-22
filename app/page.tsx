import Chat from './components/chat'
import Detail from './components/detail'
import List from './components/list/list'

export default function Home() {
  return (
    <div className="flex">
      <List />
      <Chat />
      <Detail />
    </div>
  )
}
