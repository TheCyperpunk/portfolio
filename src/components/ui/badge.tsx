import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors duration-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neon-red/20 text-neon-red hover:bg-neon-red/30",
        secondary:
          "border-transparent bg-bg-elevated text-text-dim hover:bg-bg-elevated/80",
        destructive:
          "border-transparent bg-red-500/20 text-red-400",
        outline:
          "text-text-dim border-wire",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
