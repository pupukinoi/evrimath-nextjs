import { CSSProperties, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
  onClick?: () => void
  style?: CSSProperties
  glass?: boolean
}

export default function Card({ children, padding = 'md', hover = false, onClick, style, glass = true }: CardProps) {
  const paddingMap = {
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
  }

  const cardStyle: CSSProperties = {
    background: glass ? 'rgba(21, 26, 34, 0.6)' : 'var(--surface-1)',
    backdropFilter: glass ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: glass ? 'blur(12px)' : 'none',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    padding: paddingMap[padding],
    transition: 'all 0.3s ease',
    cursor: onClick ? 'pointer' : 'default',
    boxShadow: 'var(--shadow-sm)',
    ...style,
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hover || onClick) {
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.boxShadow = 'var(--glow-primary)'
      e.currentTarget.style.border = '1px solid rgba(16, 185, 129, 0.3)'
      e.currentTarget.style.background = 'rgba(21, 26, 34, 0.8)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hover || onClick) {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.05)'
      e.currentTarget.style.background = glass ? 'rgba(21, 26, 34, 0.6)' : 'var(--surface-1)'
    }
  }

  return (
    <div
      style={cardStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
