import { cn } from "@/lib/utils"

export function GridPattern({ className }) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.25 0.005 270) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.25 0.005 270) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
