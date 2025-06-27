import { cn } from "@/lib/utils"

interface SpinnerProps {
  size?: number
  className?: string
}

export function Spinner({ size = 20, className }: SpinnerProps) {
  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-muted border-t-transparent",
        className
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: "transparent"
      }}
    />
  )
}
