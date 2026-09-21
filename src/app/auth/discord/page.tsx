'use client'

import { CSSProperties } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
import { signIn } from 'next-auth/react'

export default function AuthDiscordPage() {
  const router = useRouter()

  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, var(--surface-bg) 0%, var(--forest-50) 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--spacing-xl)',
  }

  const cardStyle: CSSProperties = {
    background: 'var(--surface-1)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--spacing-2xl)',
    boxShadow: 'var(--shadow-lg)',
    maxWidth: '500px',
    width: '100%',
    border: '1px solid var(--border)',
    textAlign: 'center',
  }

  const iconStyle: CSSProperties = {
    fontSize: '80px',
    marginBottom: 'var(--spacing-lg)',
  }

  const titleStyle: CSSProperties = {
    fontSize: '28px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: 'var(--spacing-md)',
  }

  const descStyle: CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    marginBottom: 'var(--spacing-xl)',
  }

  const handleDiscordLogin = () => {
    signIn('discord', { callbackUrl: '/dashboard' })
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={iconStyle}>🎮</div>
        <h1 style={titleStyle}>เชื่อมต่อด้วย Discord</h1>
        <p style={descStyle}>
          เข้าสู่ระบบด้วย Discord account ของคุณเพื่อเริ่มใช้งาน EvrimaTH
          <br /><br />
          เราจะเข้าถึงข้อมูล:
          <br />• ชื่อผู้ใช้และ Avatar
          <br />• Discord ID
        </p>

        <Button
          fullWidth
          size="lg"
          onClick={handleDiscordLogin}
        >
          <span style={{ marginRight: 'var(--spacing-sm)' }}>🔗</span>
          เชื่อมต่อด้วย Discord
        </Button>

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <button
            onClick={() => router.push('/')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '14px',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            ← กลับหน้าแรก
          </button>
        </div>
      </div>
    </div>
  )
}
