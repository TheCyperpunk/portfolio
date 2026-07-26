import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-wire bg-bg-elevated/50 px-4 py-3 text-sm text-white placeholder:text-text-ghost transition-all duration-300",
        "focus:outline-none focus:border-neon-red/50 focus:ring-2 focus:ring-neon-red/20",
        "hover:border-zinc-700",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
