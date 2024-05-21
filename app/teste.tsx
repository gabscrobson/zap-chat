interface TesteProps {
  color: string
}

export default function Teste({ color }: TesteProps) {
  const name = 'text-4xl text-center font-bold ' + color

  return (
    <div>
      <h1 className={name}>teste</h1>
    </div>
  )
}
