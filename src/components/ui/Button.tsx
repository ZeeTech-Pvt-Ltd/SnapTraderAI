import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const variantClass = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }[variant]
  const sizeClass = { sm: 'btn-sm', md: 'btn-md', lg: 'btn-lg' }[size]

  return (
    <a className={`btn ${variantClass} ${sizeClass} ${className}`} {...rest}>
      {children}
    </a>
  )
}
