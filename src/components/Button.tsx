import { CSSProperties, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
  style?: CSSProperties
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  style,
}: ButtonProps) {
  const sizeMap = {
    sm: {
      padding: 'var(--spacing-sm) var(--spacing-md)',
      fontSize: '14px',
    },
    md: {
      padding: 'var(--spacing-md) var(--spacing-lg)',
      fontSize: '14px',
    },
    lg: {
      padding: 'var(--spacing-md) var(--spacing-xl)',
      fontSize: '16px',
    },
  }

  const variantMap = {
    primary: {
      background: 'var(--forest-600)',
      color: '#fff',
      border: '1px solid var(--forest-700)',
      hoverBackground: 'var(--forest-700)',
      hoverBorder: '1px solid var(--forest-600)',
      hoverShadow: 'var(--glow-primary)',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.05)',
      color: 'var(--text-primary)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      hoverBackground: 'rgba(255, 255, 255, 0.1)',
      hoverBorder: '1px solid rgba(255, 255, 255, 0.2)',
      hoverShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
      hoverBackground: 'rgba(255, 255, 255, 0.05)',
      hoverBorder: '1px solid transparent',
      hoverShadow: 'none',
    },
  }

  const baseStyle: CSSProperties = {
    ...sizeMap[size],
    background: variantMap[variant].background,
    color: variantMap[variant].color,
    border: variantMap[variant].border,
    borderRadius: 'var(--radius-sm)',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.3s ease',
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-sm)',
    letterSpacing: '0.02em',
    ...style,
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.background = variantMap[variant].hoverBackground
      e.currentTarget.style.border = variantMap[variant].hoverBorder
      e.currentTarget.style.boxShadow = variantMap[variant].hoverShadow
      e.currentTarget.style.transform = 'translateY(-1px)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.background = variantMap[variant].background
      e.currentTarget.style.border = variantMap[variant].border
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.transform = 'translateY(0)'
    }
  }

  return (
    <button
      style={baseStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
