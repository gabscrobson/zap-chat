import { Icon, IconWeight } from '@phosphor-icons/react'

interface IconButtonProps {
  IconComponent: Icon
  size: number
  weight: IconWeight
  className?: string
}

export default function IconButton({
  IconComponent,
  size,
  weight,
  className,
}: IconButtonProps) {
  return (
    <IconComponent
      size={size}
      weight={weight}
      className={`transition-colors cursor-pointer hover:text-neutral-400 ${className}`}
    />
  )
}
