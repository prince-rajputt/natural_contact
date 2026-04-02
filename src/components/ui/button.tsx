import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function Button({ className, children, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn('button-primary', className)}
      {...props}
    >
      {children}
    </button>
  )
}
