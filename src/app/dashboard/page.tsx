'use client'

import { CSSProperties, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { mockCurrency } from '@/lib/mockData'

export default function DashboardPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [inGameCode, setInGameCode] = useState('')
  const [steamHex, setSteamHex] = useState('')
  const [isLinked, setIsLinked] = useState(false)

  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    background: 'var(--surface-bg)',
  }

  const contentStyle: CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 'var(--spacing-xl)',
  }

  const welcomeStyle: CSSProperties = {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 800,
    color: '#fff',
    marginBottom: 'var(--spacing-xs)',
    letterSpacing: '0.02em',
  }

  const welcomeSubStyle: CSSProperties = {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--spacing-2xl)',
    maxWidth: '600px',
  }

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'var(--spacing-lg)',
    marginBottom: 'var(--spacing-2xl)',
  }

  const statCardStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-xs)',
  }

  const statLabelStyle: CSSProperties = {
    fontSize: '13px',
    color: 'var(--text-secondary)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  }

  const statValueStyle: CSSProperties = {
    fontSize: 'clamp(32px, 4vw, 42px)',
    fontWeight: 800,
    color: '#fff',
    fontFamily: 'var(--font-mono)',
    textShadow: 'var(--glow-primary)',
  }

  const quickActionsStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'var(--spacing-md)',
    marginTop: 'var(--spacing-xl)',
  }

  const actionCardStyle: CSSProperties = {
    cursor: 'pointer',
    transition: 'transform 0.2s',
  }

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: 'var(--spacing-md)',
    fontSize: '16px',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-mono)',
    background: 'var(--surface-1)',
    color: 'var(--text-primary)',
    textAlign: 'center',
    letterSpacing: '0.1em',
    marginBottom: 'var(--spacing-sm)'
  }

  const handleSubmitCode = () => {
    if (!steamHex) {
      alert('❌ กรุณาใส่ Steam Hex ID ก่อน')
      return
    }
    if (inGameCode.length === 6) {
      alert('✅ ลิงค์สำเร็จ! (นี่คือ demo)\nSteam Hex: ' + steamHex + '\nเชื่อมต่อกับ Discord: ' + session?.user?.name)
      setIsLinked(true)
      setInGameCode('')
    } else {
      alert('❌ โค้ดไม่ถูกต้อง กรุณาพิมพ์ !codeweb ในเกมเพื่อรับโค้ด 6 หลัก')
    }
  }

  if (status === 'loading') {
    return <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>กำลังโหลด...</div>
  }

  if (status === 'unauthenticated') {
    return (
      <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
        <h2>กรุณาเข้าสู่ระบบ</h2>
        <Button onClick={() => router.push('/auth/discord')} style={{ marginTop: '16px' }}>
          ไปที่หน้า Login
        </Button>
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      <Navbar />

      <main style={contentStyle}>
        <h1 style={welcomeStyle}>สวัสดี, {session?.user?.name || 'Survivor'}! 🦖</h1>
        <p style={welcomeSubStyle}>
          ยินดีต้อนรับเข้าสู่ระบบจัดการเซิร์ฟเวอร์ EvrimaTH เอาชีวิตรอดและเติบโตไปพร้อมกัน
        </p>

        {!isLinked && (
          <Card style={{ marginBottom: 'var(--spacing-xl)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
              <div style={{ fontSize: '32px' }}>⚠️</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: '#f59e0b' }}>
                  ยังไม่ได้ลิงค์กับเกม
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                  เข้าเกมและพิมพ์ <code style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', padding: '2px 6px', borderRadius: '4px' }}>!codeweb</code> เพื่อรับรหัส 6 หลัก
                </p>
                
                <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <input
                    type="text"
                    placeholder="ใส่ Steam Hex ID (เช่น 11000010xxxxxx)"
                    value={steamHex}
                    onChange={(e) => setSteamHex(e.target.value)}
                    style={{...inputStyle, marginBottom: 0}}
                  />
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="ใส่รหัส 6 หลักที่นี่"
                    value={inGameCode}
                    onChange={(e) => setInGameCode(e.target.value.toUpperCase())}
                    style={{...inputStyle, marginBottom: 0}}
                  />
                  <Button fullWidth onClick={handleSubmitCode}>
                    ลิงค์บัญชี
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {isLinked && (
          <Card style={{ marginBottom: 'var(--spacing-xl)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
              <div style={{ fontSize: '32px' }}>🎮</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--forest-600)' }}>
                  บัญชีเชื่อมโยงเรียบร้อยแล้ว
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  Steam Hex: <span style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>{steamHex}</span>
                </p>
              </div>
            </div>
          </Card>
        )}

        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>
          💰 ยอดเงินคงเหลือ
        </h2>

        <div style={gridStyle}>
          <Card>
            <div style={statCardStyle}>
              <div style={statLabelStyle}>⏱️ Time Balance</div>
              <div style={statValueStyle}>{mockCurrency.time.toLocaleString('th-TH')}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                +500 ทุก 45 นาที
              </div>
            </div>
          </Card>

          <Card>
            <div style={statCardStyle}>
              <div style={statLabelStyle}>💎 Point Balance</div>
              <div style={statValueStyle}>{mockCurrency.point.toLocaleString('th-TH')}</div>
              <Button size="sm" style={{ marginTop: 'var(--spacing-sm)' }}>
                เติมเงิน
              </Button>
            </div>
          </Card>

          <Card>
            <div style={statCardStyle}>
              <div style={statLabelStyle}>💠 Gems Balance</div>
              <div style={statValueStyle}>{mockCurrency.gems.toLocaleString('th-TH')}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                +1 ทุก 2 ชม.
              </div>
            </div>
          </Card>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: 'var(--spacing-md)', color: '#fff' }}>
          🚀 Quick Actions
        </h2>

        <div style={quickActionsStyle}>
          <Card hover style={actionCardStyle} onClick={() => router.push('/shop')}>
            <div style={{ fontSize: '48px', textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>🛒</div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, textAlign: 'center', marginBottom: 'var(--spacing-xs)', color: '#fff' }}>
              ร้านค้า
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center' }}>
              ซื้อ Dino Park, Food Pack และ Skins
            </p>
          </Card>

          <Card hover style={actionCardStyle} onClick={() => router.push('/storage')}>
            <div style={{ fontSize: '48px', textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>📦</div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, textAlign: 'center', marginBottom: 'var(--spacing-xs)', color: '#fff' }}>
              คลังไดโน
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center' }}>
              จัดการไดโนทั้งหมดของคุณ
            </p>
          </Card>

          <Card hover style={actionCardStyle} onClick={() => router.push('/friends')}>
            <div style={{ fontSize: '48px', textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>👥</div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, textAlign: 'center', marginBottom: 'var(--spacing-xs)', color: '#fff' }}>
              เพื่อน & Teleport
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center' }}>
              วาร์ปไปหาเพื่อนที่กำลังเล่น
            </p>
          </Card>

          <Card hover style={actionCardStyle} onClick={() => router.push('/promo')}>
            <div style={{ fontSize: '48px', textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>🎁</div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, textAlign: 'center', marginBottom: 'var(--spacing-xs)', color: '#fff' }}>
              Promo Code
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center' }}>
              ใส่โค้ดรับของรางวัล
            </p>
          </Card>
        </div>

        <div style={{
          marginTop: 'var(--spacing-2xl)',
          padding: 'var(--spacing-xl)',
          background: 'rgba(16, 185, 129, 0.05)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-md)', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📢</span> ประกาศ
          </h3>
          <ul style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            paddingLeft: 'var(--spacing-lg)',
            lineHeight: 1.8,
          }}>
            <li>🎉 ระบบเว็บเปิดให้ใช้งานแล้ว! ทดลองใช้ฟีเจอร์ต่างๆ</li>
            <li>🗺️ Live Map กำลังพัฒนา คาดว่าจะเปิดให้ใช้งานเร็วๆ นี้</li>
            <li>💎 โปรโมชั่นเปิดเซิร์ฟ: ใช้โค้ด <code style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>LAUNCH50</code> รับ 50 Point ฟรี!</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
