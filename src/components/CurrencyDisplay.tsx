import { CSSProperties } from 'react'

interface CurrencyDisplayProps {
  time: number
  point: number
  gems: number
  size?: 'sm' | 'md' | 'lg'
}

export default function CurrencyDisplay({ time, point, gems, size = 'md' }: CurrencyDisplayProps) {
  const sizeMap = {
    sm: {
      fontSize: '16px',
      gap: 'var(--spacing-sm)',
    },
    md: {
      fontSize: '20px',
      gap: 'var(--spacing-md)',
    },
    lg: {
      fontSize: '24px',
      gap: 'var(--spacing-lg)',
    },
  }

  const containerStyle: CSSProperties = {
    display: 'flex',
    gap: sizeMap[size].gap,
    flexWrap: 'wrap',
  }

  const itemStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-xs)',
    padding: 'var(--spacing-sm) var(--spacing-md)',
    background: 'var(--surface-2)',
    borderRadius: 'var(--radius-full)',
    fontSize: sizeMap[size].fontSize,
    fontWeight: 600,
    color: 'var(--forest-700)',
  }

  const labelStyle: CSSProperties = {
    fontSize: size === 'sm' ? '12px' : size === 'md' ? '14px' : '16px',
    fontWeight: 400,
    color: 'var(--text-secondary)',
  }

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <span>⏱️</span>
        <span>{new Intl.NumberFormat('th-TH').format(time)}</span>
        <span style={labelStyle}>Time</span>
      </div>

      <div style={itemStyle}>
        <span>💎</span>
        <span>{new Intl.NumberFormat('th-TH').format(point)}</span>
        <span style={labelStyle}>Point</span>
      </div>

      <div style={itemStyle}>
        <span>💠</span>
        <span>{new Intl.NumberFormat('th-TH').format(gems)}</span>
        <span style={labelStyle}>Gems</span>
      </div>
    </div>
  )
}
