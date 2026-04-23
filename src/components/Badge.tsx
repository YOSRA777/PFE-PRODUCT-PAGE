import type { HTMLAttributes, ReactNode } from 'react'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

export function Badge({ children, className = '', ...props }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full bg-selection px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-dark',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}
