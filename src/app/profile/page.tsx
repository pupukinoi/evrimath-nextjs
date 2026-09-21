'use client'

import { CSSProperties } from 'react'
import { useSession } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { mockUser, mockCurrency } from '@/lib/mockData'

export default function ProfilePage() {
  const { data: session } = useSession()

  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    background: 'var(--surface-bg)',
  }

  const contentStyle: CSSProperties = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: 'var(--spacing-xl)',
  }

  const sectionTitleStyle: CSSProperties = {
    fontSize: 'clamp(24px, 4vw, 32px)',
    fontWeight: 700,
    color: '#fff',
    marginBottom: 'var(--spacing-lg)',
  }

  const profileHeaderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-xl)',
    marginBottom: 'var(--spacing-xl)',
  }

  const avatarStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'var(--forest-200)',
    display: 'grid',
    placeItems: 'center',
    fontSize: '64px',
    border: '4px solid var(--forest-600)',
  }

  const profileInfoStyle: CSSProperties = {
    flex: 1,
  }

  const usernameStyle: CSSProperties = {
    fontSize: 'clamp(24px, 4vw, 32px)',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: 'var(--spacing-xs)',
  }

  const discordIdStyle: CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono)',
    marginBottom: 'var(--spacing-sm)',
  }

  const linkedDateStyle: CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-tertiary)',
  }

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'var(--spacing-lg)',
    marginBottom: 'var(--spacing-xl)',
  }

  const statCardStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-sm)',
  }

  const statLabelStyle: CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    fontWeight: 500,
  }

  const statValueStyle: CSSProperties = {
    fontSize: 'clamp(28px, 4vw, 36px)',
    fontWeight: 700,
    color: '#fff',
  }

  const sectionSubtitleStyle: CSSProperties = {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: 'var(--spacing-md)',
    marginTop: 'var(--spacing-xl)',
  }

  const infoRowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'var(--spacing-md)',
    borderBottom: '1px solid var(--border)',
  }

  const labelStyle: CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
  }

  const valueStyle: CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--text-primary)',
  }

  return (
    <div style={containerStyle}>
      <Navbar />

      <main style={contentStyle}>
        <h1 style={sectionTitleStyle}>👤 โปรไฟล์</h1>

        <Card style={{ marginBottom: 'var(--spacing-xl)' }}>
          <div style={profileHeaderStyle}>
            <div style={{ ...avatarStyle, overflow: 'hidden' }}>
              {session?.user?.image ? (
                <img src={session.user.image} alt="Avatar" style={{ width: '100%', height: '100%' }} />
              ) : (
                '👤'
              )}
            </div>
            <div style={profileInfoStyle}>
              <div style={usernameStyle}>{session?.user?.name || 'Guest'}</div>
              <div style={discordIdStyle}>Discord ID: {(session?.user as any)?.id || mockUser.discordId}</div>
              {mockUser.linkedAt && (
                <div style={linkedDateStyle}>
                  เชื่อมต่อเมื่อ: {mockUser.linkedAt.toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              )}
            </div>
            <Button variant="secondary">แก้ไข</Button>
          </div>
        </Card>

        <h2 style={{...sectionSubtitleStyle, color: '#fff'}}>💰 ยอดเงินคงเหลือ</h2>

        <div style={gridStyle}>
          <Card>
            <div style={statCardStyle}>
              <div style={statLabelStyle}>⏱️ Time Balance</div>
              <div style={statValueStyle}>{mockCurrency.time.toLocaleString('th-TH')}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                ได้จากการเล่น 45 นาที = 500 Time
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
                ได้จากการเล่น 2 ชม. = 1 Gems
              </div>
            </div>
          </Card>
        </div>

        <h2 style={{...sectionSubtitleStyle, color: '#fff'}}>🔗 การเชื่อมต่อ</h2>

        <Card>
          <div style={infoRowStyle}>
            <div style={labelStyle}>Discord</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <div style={{...valueStyle, color: '#fff'}}>เชื่อมต่อแล้ว ✅</div>
            </div>
          </div>

          <div style={infoRowStyle}>
            <div style={labelStyle}>Steam Hex ID</div>
            <div style={{ ...valueStyle, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
              {mockUser.steamHex || 'ยังไม่ได้เชื่อมต่อ'}
            </div>
          </div>

          <div style={infoRowStyle}>
            <div style={labelStyle}>In-Game Code</div>
            <div style={valueStyle}>
              {mockUser.steamHex ? (
                <span style={{ color: '#fff' }}>พิมพ์ !codeweb ในเกมเพื่อลิงค์</span>
              ) : (
                <span style={{ color: 'var(--text-tertiary)' }}>รอการลิงค์</span>
              )}
            </div>
          </div>

          <div style={{ ...infoRowStyle, borderBottom: 'none' }}>
            <div style={labelStyle}>สถานะ</div>
            <div style={{
              padding: '4px 12px',
              background: 'rgba(16, 185, 129, 0.1)',
              color: '#10b981',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 'var(--radius-full)',
              fontSize: '12px',
              fontWeight: 600,
            }}>
              ✅ ใช้งานได้
            </div>
          </div>
        </Card>

        <h2 style={sectionSubtitleStyle}>📊 สถิติ</h2>

        <Card>
          <div style={infoRowStyle}>
            <div style={labelStyle}>เวลาเล่นรวม</div>
            <div style={valueStyle}>245 ชั่วโมง</div>
          </div>

          <div style={infoRowStyle}>
            <div style={labelStyle}>จำนวนไดโนในคลัง</div>
            <div style={valueStyle}>2 / 2 ตัว</div>
          </div>

          <div style={infoRowStyle}>
            <div style={labelStyle}>จำนวน Kills</div>
            <div style={valueStyle}>89</div>
          </div>

          <div style={infoRowStyle}>
            <div style={labelStyle}>จำนวน Deaths</div>
            <div style={valueStyle}>34</div>
          </div>

          <div style={infoRowStyle}>
            <div style={labelStyle}>K/D Ratio</div>
            <div style={valueStyle}>2.62</div>
          </div>

          <div style={{ ...infoRowStyle, borderBottom: 'none' }}>
            <div style={labelStyle}>อันดับ</div>
            <div style={{
              padding: '4px 12px',
              background: '#ffd700',
              color: 'white',
              borderRadius: 'var(--radius-full)',
              fontSize: '12px',
              fontWeight: 600,
            }}>
              #4
            </div>
          </div>
        </Card>

        <div style={{
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          background: '#fee2e2',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid #fecaca',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: '#991b1b' }}>
            ⚠️ Danger Zone
          </h3>
          <p style={{ fontSize: '14px', color: '#7f1d1d', marginBottom: 'var(--spacing-md)' }}>
            การดำเนินการเหล่านี้ไม่สามารถย้อนกลับได้
          </p>
          <Button variant="ghost" size="sm">
            🗑️ ลบบัญชี
          </Button>
        </div>
      </main>
    </div>
  )
}
