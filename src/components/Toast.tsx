import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  autoClose?: number
}

export function Toast({ message, autoClose = 3000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, autoClose)

    return () => clearTimeout(timer)
  }, [autoClose])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-in-up">
      <div className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-bg-light shadow-lg shadow-primary/30">
        {message}
      </div>
    </div>
  )
}
