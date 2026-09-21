'use client'

import { CSSProperties } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { mockCurrency } from '@/lib/mockData'

export default function Navbar() {
  const { data: session } = useSession()

  const navStyle: CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(11, 14, 20, 0.8)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '0 var(--spacing-lg)',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const logoStyle: CSSProperties = {
    fontSize: '22px',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-sm)',
    letterSpacing: '0.05em',
  }

  const navLinksStyle: CSSProperties = {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  }

  const navLinkStyle: CSSProperties = {
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: 'var(--radius-sm)',
    transition: 'all 0.2s ease',
    letterSpacing: '0.02em',
  }

  const userInfoStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md)',
  }

  const currencyBadgeStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-xs)',
    padding: '6px 14px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 'var(--radius-sm)',
    fontSize: '13px',
    fontWeight: 600,
    color: 'var(--text-primary)',
  }

  const avatarStyle: CSSProperties = {
    width: '36px',
    height: '36px',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--surface-2)',
    display: 'grid',
    placeItems: 'center',
    fontSize: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  }

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
    e.currentTarget.style.color = '#fff'
  }

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = 'transparent'
    e.currentTarget.style.color = 'var(--text-secondary)'
  }

  return (
    <nav style={navStyle}>
      <a href="/dashboard" style={logoStyle}>
        🦖 <span>EvrimaTH</span>
      </a>

      <div style={navLinksStyle}>
        <a
          href="/dashboard"
          style={navLinkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          🏠 หน้าแรก
        </a>
        <a
          href="/shop"
          style={navLinkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          🛒 ร้านค้า
        </a>
        <a
          href="/market"
          style={navLinkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          🦖 ตลาด
        </a>
        <a
          href="/storage"
          style={navLinkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          📦 คลัง
        </a>
        <a
          href="/friends"
          style={navLinkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          👥 เพื่อน
        </a>
        <a
          href="/leaderboard"
          style={navLinkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          🏆 อันดับ
        </a>
        <a
          href="/promo"
          style={navLinkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          🎁 โค้ด
        </a>
        <a
          href="/map"
          style={navLinkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          🗺️ แผนที่
        </a>
      </div>

      <div style={userInfoStyle}>
        <div style={currencyBadgeStyle}>
          💎 {new Intl.NumberFormat('th-TH').format(mockCurrency.point)}
        </div>
        <div style={currencyBadgeStyle}>
          💠 {new Intl.NumberFormat('th-TH').format(mockCurrency.gems)}
        </div>
        {session?.user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            <div style={avatarStyle}>
              {session.user.image ? (
                <img src={session.user.image} alt="Avatar" style={{ width: '100%', height: '100%' }} />
              ) : (
                '👤'
              )}
            </div>
            <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>
              {session.user.name}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '12px',
                cursor: 'pointer',
                marginLeft: '8px',
                textDecoration: 'underline'
              }}
            >
              ออกระบบ
            </button>
          </div>
        ) : (
          <a href="/auth/discord" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            <div style={avatarStyle}>👤</div>
            <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>
              เข้าสู่ระบบ
            </span>
          </a>
        )}
      </div>
    </nav>
  )
}
