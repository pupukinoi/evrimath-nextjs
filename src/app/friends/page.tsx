'use client'

import { CSSProperties, useState } from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Button from '@/components/Button'

interface Friend {
  id: string
  discordUsername: string
  discordAvatar: string
  isOnline: boolean
  currentDino: string | null
  lastTeleport: Date | null
}

const mockFriends: Friend[] = [
  {
    id: 'friend_001',
    discordUsername: 'DinoHunter99',
    discordAvatar: '',
    isOnline: true,
    currentDino: 'Carnotaurus',
    lastTeleport: null,
  },
  {
    id: 'friend_002',
    discordUsername: 'RexKing',
    discordAvatar: '',
    isOnline: true,
    currentDino: 'Tyrannosaurus',
    lastTeleport: new Date(Date.now() - 20 * 60 * 1000), // 20 mins ago
  },
  {
    id: 'friend_003',
    discordUsername: 'HerbiLover',
    discordAvatar: '',
    isOnline: false,
    currentDino: null,
    lastTeleport: null,
  },
]

export default function FriendsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    background: 'var(--surface-bg)',
  }

  const contentStyle: CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 'var(--spacing-xl)',
  }

  const sectionTitleStyle: CSSProperties = {
    fontSize: 'clamp(24px, 4vw, 32px)',
    fontWeight: 700,
    color: '#fff',
    marginBottom: 'var(--spacing-lg)',
  }

  const searchContainerStyle: CSSProperties = {
    marginBottom: 'var(--spacing-xl)',
  }

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: 'var(--spacing-md)',
    fontSize: '16px',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-primary)',
    background: 'var(--surface-1)',
    color: 'var(--text-primary)',
  }

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: 'var(--spacing-lg)',
  }

  const friendCardStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-md)',
  }

  const friendHeaderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md)',
  }

  const avatarStyle = (isOnline: boolean): CSSProperties => ({
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'var(--forest-200)',
    display: 'grid',
    placeItems: 'center',
    fontSize: '32px',
    position: 'relative',
    border: isOnline ? '3px solid var(--forest-600)' : '3px solid var(--surface-3)',
  })

  const statusDotStyle = (isOnline: boolean): CSSProperties => ({
    position: 'absolute',
    bottom: '4px',
    right: '4px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: isOnline ? '#4ade80' : '#94a3b8',
    border: '2px solid var(--surface-1)',
  })

  const usernameStyle: CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: 'var(--text-primary)',
  }

  const statusTextStyle: CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
  }

  const infoBoxStyle: CSSProperties = {
    padding: 'var(--spacing-lg)',
    background: 'var(--forest-50)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border)',
    marginBottom: 'var(--spacing-xl)',
  }

  const canTeleport = (lastTeleport: Date | null): boolean => {
    if (!lastTeleport) return true
    const thirtyMinutesAgo = Date.now() - 30 * 60 * 1000
    return lastTeleport.getTime() < thirtyMinutesAgo
  }

  const getTeleportCooldown = (lastTeleport: Date | null): number => {
    if (!lastTeleport) return 0
    const thirtyMinutes = 30 * 60 * 1000
    const elapsed = Date.now() - lastTeleport.getTime()
    return Math.max(0, Math.ceil((thirtyMinutes - elapsed) / 60000))
  }

  return (
    <div style={containerStyle}>
      <Navbar />

      <main style={contentStyle}>
        <h1 style={sectionTitleStyle}>👥 เพื่อน</h1>

        <div style={infoBoxStyle}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
            💡 ระบบเพื่อนและ Teleport
          </h3>
          <ul style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            paddingLeft: 'var(--spacing-lg)',
            lineHeight: 1.8,
          }}>
            <li><strong>เพิ่มเพื่อน:</strong> ค้นหาด้วย Discord ID</li>
            <li><strong>Teleport:</strong> วาร์ปไปหาเพื่อนที่กำลังเล่นอยู่</li>
            <li><strong>เงื่อนไข Teleport:</strong> Health, Stamina, Hunger, Thirst ต้องเต็ม 100% ทั้งคู่</li>
            <li><strong>Cooldown:</strong> 30 นาที ต่อครั้ง</li>
          </ul>
        </div>

        <div style={searchContainerStyle}>
          <input
            type="text"
            placeholder="🔍 ค้นหาเพื่อนด้วย Discord ID หรือชื่อผู้ใช้..."
            style={inputStyle}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
          รายชื่อเพื่อน ({mockFriends.length})
        </h2>

        <div style={gridStyle}>
          {mockFriends.map((friend) => {
            const canTp = canTeleport(friend.lastTeleport)
            const cooldownMins = getTeleportCooldown(friend.lastTeleport)

            return (
              <Card key={friend.id} hover>
                <div style={friendCardStyle}>
                  <div style={friendHeaderStyle}>
                    <div style={{ position: 'relative' }}>
                      <div style={avatarStyle(friend.isOnline)}>👤</div>
                      <div style={statusDotStyle(friend.isOnline)} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={usernameStyle}>{friend.discordUsername}</div>
                      <div style={statusTextStyle}>
                        {friend.isOnline ? '🟢 ออนไลน์' : '⚫ ออฟไลน์'}
                      </div>
                    </div>
                  </div>

                  {friend.currentDino && (
                    <div style={{
                      padding: 'var(--spacing-sm)',
                      background: 'var(--forest-100)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '14px',
                      color: '#fff',
                    }}>
                      🦖 กำลังเล่น: <strong>{friend.currentDino}</strong>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                    <Button
                      size="sm"
                      fullWidth
                      disabled={!friend.isOnline || !friend.currentDino || !canTp}
                    >
                      {canTp ? '🚀 Teleport' : `⏱️ ${cooldownMins} นาที`}
                    </Button>
                    <Button size="sm" variant="ghost">
                      ✉️
                    </Button>
                    <Button size="sm" variant="ghost">
                      🗑️
                    </Button>
                  </div>

                  {!canTp && (
                    <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', textAlign: 'center' }}>
                      Cooldown เหลืออีก {cooldownMins} นาที
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>

        <Card style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>
          <div style={{ fontSize: '48px', marginBottom: 'var(--spacing-md)' }}>➕</div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
            เพิ่มเพื่อนใหม่
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            ค้นหาด้วย Discord ID หรือชื่อผู้ใช้
          </p>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Discord ID หรือชื่อผู้ใช้"
              style={{ ...inputStyle, marginBottom: 'var(--spacing-md)' }}
            />
            <Button fullWidth>เพิ่มเพื่อน</Button>
          </div>
        </Card>
      </main>
    </div>
  )
}
