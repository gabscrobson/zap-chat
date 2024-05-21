import Teste from './teste'

export default function Home() {
  const lista = [1, 2, 3, 4, 5]
  const colors = [
    'text-blue-400',
    'text-red-400',
    'text-green-400',
    'text-pink-400',
    'text-yellow-400',
    'text-purple-400',
    'text-indigo-400',
    'text-gray-400',
    'text-black',
    'text-white',
  ]

  return (
    <div>
      {colors.map((color) => (
        <Teste key={color} color={color} />
      ))}
      <h2>
        {lista.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </h2>
    </div>
  )
}
