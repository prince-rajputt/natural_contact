import type { HTMLAttributes, ReactNode, SVGProps } from 'react'

import { cn } from '@/lib/utils'

interface IconProps {
  id: number
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode
  className: string
}

export interface FloatingIconsHeroProps extends HTMLAttributes<HTMLDivElement> {
  icons: IconProps[]
}

export function FloatingIconsHero({
  className,
  icons,
  children,
  ...props
}: FloatingIconsHeroProps) {
  return (
    <div className={cn('floating-hero', className)} {...props}>
      <div className="floating-hero__icons" aria-hidden="true">
        {icons.map((icon, index) => (
          <div
            key={icon.id}
            className={cn('floating-hero__icon', icon.className)}
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            <div className="floating-hero__icon-shell">
              <icon.icon />
            </div>
          </div>
        ))}
      </div>
      <div className="floating-hero__content">{children}</div>
    </div>
  )
}
