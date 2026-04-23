import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function Button({ children, className = '', type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center rounded bg-primary px-5 py-3 text-sm font-semibold text-bg-light transition duration-300 ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
