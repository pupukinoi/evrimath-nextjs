'use client'

import { CSSProperties } from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { mockDinosaurs } from '@/lib/mockData'
import { formatGrowth, getGrowthStage } from '@/lib/utils'

export default function StoragePage() {
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

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: 'var(--spacing-lg)',
  }

  const dinoCardStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-md)',
  }

  const dinoHeaderStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }

  const dinoNameStyle: CSSProperties = {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--text-primary)',
  }

  const dinoStatsStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 'var(--spacing-sm)',
  }

  const statItemStyle: CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
  }

  const badgeStyle = (isActive: boolean): CSSProperties => ({
    padding: '4px 12px',
    borderRadius: 'var(--radius-full)',
    fontSize: '12px',
    fontWeight: 600,
    background: isActive ? 'var(--forest-200)' : 'var(--surface-3)',
    color: isActive ? 'var(--forest-700)' : 'var(--text-tertiary)',
  })

  const progressBarContainerStyle: CSSProperties = {
    width: '100%',
    height: '8px',
    background: 'var(--surface-3)',
    borderRadius: 'var(--radius-full)',
    overflow: 'hidden',
  }

  const progressBarStyle = (value: number): CSSProperties => ({
    width: `${value * 100}%`,
    height: '100%',
    background: 'var(--forest-600)',
    borderRadius: 'var(--radius-full)',
    transition: 'width 0.3s',
  })

  const infoBoxStyle: CSSProperties = {
    padding: 'var(--spacing-lg)',
    background: 'var(--forest-50)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border)',
    marginBottom: 'var(--spacing-xl)',
  }

  return (
    <div style={containerStyle}>
      <Navbar />

      <main style={contentStyle}>
        <h1 style={sectionTitleStyle}>📦 คลังไดโน</h1>

        <div style={infoBoxStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>
                พื้นที่คลัง: {mockDinosaurs.length} / 2 ตัว
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                เริ่มต้นเก็บได้แค่ 2 ตัว พื้นที่เพิ่มเติมต้องเช่า 50 Point/เดือน/ช่อง
              </div>
            </div>
            <Button>เช่าพื้นที่เพิ่ม</Button>
          </div>
        </div>

        <div style={gridStyle}>
          {mockDinosaurs.map((dino) => (
            <Card key={dino.id} hover>
              <div style={dinoCardStyle}>
                <div style={dinoHeaderStyle}>
                  <div>
                    <div style={dinoNameStyle}>{dino.species}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                      {getGrowthStage(dino.growth)}
                    </div>
                  </div>
                  <div style={badgeStyle(dino.isActive)}>
                    {dino.isActive ? '🟢 Active' : '⚫ Storage'}
                  </div>
                </div>

                <div style={{
                  width: '100%',
                  height: '180px',
                  background: 'var(--surface-2)',
                  borderRadius: 'var(--radius-md)',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '72px',
                }}>
                  🦖
                </div>

                <div>
                  <div style={{ ...statItemStyle, marginBottom: '4px' }}>
                    Growth: {formatGrowth(dino.growth)}
                  </div>
                  <div style={progressBarContainerStyle}>
                    <div style={progressBarStyle(dino.growth)} />
                  </div>
                </div>

                <div style={dinoStatsStyle}>
                  <div style={statItemStyle}>❤️ Health: {dino.health}%</div>
                  <div style={statItemStyle}>⚡ Stamina: {dino.stamina}%</div>
                  <div style={statItemStyle}>🍖 Hunger: {dino.hunger}%</div>
                  <div style={statItemStyle}>💧 Thirst: {dino.thirst}%</div>
                </div>

                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                  📍 Last seen: {dino.location}
                </div>

                {dino.skinId && (
                  <div style={{
                    padding: 'var(--spacing-sm)',
                    background: 'var(--forest-100)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '12px',
                    color: '#fff',
                    fontWeight: 600,
                  }}>
                    🎨 Custom Skin Applied
                  </div>
                )}

                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                  {dino.isActive ? (
                    <Button size="sm" variant="secondary" fullWidth>
                      📦 เก็บเข้าคลัง
                    </Button>
                  ) : (
                    <Button size="sm" fullWidth>
                      🎮 เข้าเล่น
                    </Button>
                  )}
                  <Button size="sm" variant="ghost">
                    🗑️
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          <Card hover style={{ display: 'grid', placeItems: 'center', minHeight: '400px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: 'var(--spacing-md)' }}>🥚</div>
              <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
                Spawn New Dino
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                เกิดใหม่เริ่มต้นจาก 0% หรือใช้ 10 Gems แลกเป็น 50%
              </div>
              <Button>เลือกไดโน</Button>
            </div>
          </Card>
        </div>

        <div style={{
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          background: 'var(--surface-1)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>
            💡 เกี่ยวกับคลัง
          </h3>
          <ul style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            paddingLeft: 'var(--spacing-lg)',
            lineHeight: 1.8,
          }}>
            <li>พื้นที่ฟรี: 2 ช่อง</li>
            <li>เช่าพื้นที่เพิ่ม: 50 Point/เดือน/ช่อง</li>
            <li>ไดโนที่ตายแล้วจะถูกลบออกจากคลังอัตโนมัติ</li>
            <li>สามารถเปลี่ยนไดโนที่ใช้งานได้ตลอด (ไดโนตัวเก่าจะกลับเข้าคลัง)</li>
            <li>ไดโนในคลังจะไม่หิวหรือกระหาย สถานะจะคงที่</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
