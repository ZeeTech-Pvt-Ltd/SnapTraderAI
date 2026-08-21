import { Link } from 'react-router-dom'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  /** Router destination — renders a client-side Link when provided */
  to?: string
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  children,
  ...rest
}: ButtonProps) {
  const variantClass = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }[variant]
  const sizeClass = { sm: 'btn-sm', md: 'btn-md', lg: 'btn-lg' }[size]
  const classes = `btn ${variantClass} ${sizeClass} ${className}`

  if (to) {
    const { href: _ignored, ...linkRest } = rest
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    )
  }

  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  )
}
