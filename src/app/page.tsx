'use client'

import { CSSProperties } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'

export default function HomePage() {
  const router = useRouter()

  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, var(--surface-bg) 0%, var(--forest-50) 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--spacing-xl)',
    position: 'relative',
    overflow: 'hidden',
  }

  const logoStyle: CSSProperties = {
    fontSize: 'clamp(80px, 15vw, 120px)',
    marginBottom: 'var(--spacing-lg)',
    animation: 'float 3s ease-in-out infinite',
  }

  const titleStyle: CSSProperties = {
    fontSize: 'clamp(32px, 6vw, 56px)',
    fontWeight: 700,
    color: '#fff',
    marginBottom: 'var(--spacing-md)',
    textAlign: 'center',
  }

  const subtitleStyle: CSSProperties = {
    fontSize: 'clamp(16px, 3vw, 20px)',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--spacing-2xl)',
    textAlign: 'center',
    maxWidth: '600px',
  }

  const cardStyle: CSSProperties = {
    background: 'var(--surface-1)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--spacing-2xl)',
    boxShadow: 'var(--shadow-lg)',
    maxWidth: '500px',
    width: '100%',
    border: '1px solid var(--border)',
  }

  const stepsContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-lg)',
    marginBottom: 'var(--spacing-xl)',
  }

  const stepStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--spacing-md)',
  }

  const stepNumberStyle: CSSProperties = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'var(--forest-600)',
    color: 'white',
    display: 'grid',
    placeItems: 'center',
    fontWeight: 700,
    fontSize: '16px',
    flexShrink: 0,
  }

  const stepTextStyle: CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
  }

  const warningBoxStyle: CSSProperties = {
    padding: 'var(--spacing-md)',
    background: '#fef3c7',
    border: '1px solid #fcd34d',
    borderRadius: 'var(--radius-md)',
    marginTop: 'var(--spacing-lg)',
  }

  const warningTextStyle: CSSProperties = {
    fontSize: '13px',
    color: '#78350f',
    lineHeight: 1.6,
  }

  return (
    <div style={containerStyle}>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      <div style={logoStyle}>🦖</div>
      <h1 style={titleStyle}>EvrimaTH</h1>
      <p style={subtitleStyle}>
        ระบบจัดการไดโน, ร้านค้า และโซเชียลสำหรับเซิร์ฟเวอร์ The Isle: Evrima Thailand
      </p>

      <div style={cardStyle}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: 'var(--spacing-lg)', color: 'var(--text-primary)' }}>
          เริ่มต้นใช้งาน
        </h2>

        <div style={stepsContainerStyle}>
          <div style={stepStyle}>
            <div style={stepNumberStyle}>1</div>
            <div style={stepTextStyle}>
              <strong>เชื่อมต่อ Discord</strong><br />
              ล็อกอินด้วย Discord account ของคุณ
            </div>
          </div>

          <div style={stepStyle}>
            <div style={stepNumberStyle}>2</div>
            <div style={stepTextStyle}>
              <strong>ใส่ Steam Hex ID</strong><br />
              ใส่เลข hex steam ของคุณเพื่อลิงค์บัญชี
            </div>
          </div>

          <div style={stepStyle}>
            <div style={stepNumberStyle}>3</div>
            <div style={stepTextStyle}>
              <strong>ลิงค์ในเกม</strong><br />
              เข้าเกมแล้วพิมพ์ <code style={{ background: 'var(--surface-2)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>!codeweb</code> เพื่อรับโค้ดลิงค์
            </div>
          </div>

          <div style={stepStyle}>
            <div style={stepNumberStyle}>4</div>
            <div style={stepTextStyle}>
              <strong>เริ่มเล่น!</strong><br />
              ใช้งานระบบร้านค้า, คลังไดโน, teleport และอื่นๆ
            </div>
          </div>
        </div>

        <Button
          fullWidth
          size="lg"
          onClick={() => router.push('/auth/discord')}
        >
          🔗 เชื่อมต่อด้วย Discord
        </Button>

        <div style={warningBoxStyle}>
          <p style={warningTextStyle}>
            ⚠️ <strong>หมายเหตุ:</strong> ระบบยังอยู่ในช่วงพัฒนา บางฟีเจอร์อาจยังใช้งานไม่ได้
          </p>
        </div>
      </div>

      <div style={{ marginTop: 'var(--spacing-2xl)', fontSize: '14px', color: 'var(--text-tertiary)' }}>
        Made with ❤️ for The Isle: Evrima Thailand Community
      </div>
    </div>
  )
}
