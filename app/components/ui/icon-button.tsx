import { Icon, IconWeight } from '@phosphor-icons/react'

interface IconButtonProps {
  IconComponent: Icon
  size: number
  weight: IconWeight
  color?: string
  className?: string
}

export default function IconButton({
  IconComponent,
  size,
  weight,
  color,
  className,
}: IconButtonProps) {
  return (
    <IconComponent
      size={size}
      weight={weight}
      color={color}
      className={`transition-colors cursor-pointer hover:text-neutral-400 ${className}`}
    />
  )
}
