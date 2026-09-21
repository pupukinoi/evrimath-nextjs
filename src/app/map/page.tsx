'use client'

import { CSSProperties } from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'

export default function MapPage() {
  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    background: 'var(--surface-bg)',
  }

  const contentStyle: CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: 'var(--spacing-xl)',
  }

  const sectionTitleStyle: CSSProperties = {
    fontSize: 'clamp(24px, 4vw, 32px)',
    fontWeight: 700,
    color: '#fff',
    marginBottom: 'var(--spacing-lg)',
  }

  const mapContainerStyle: CSSProperties = {
    width: '100%',
    height: '70vh',
    minHeight: '600px',
    background: 'var(--surface-2)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border)',
    display: 'grid',
    placeItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  }

  const infoBoxStyle: CSSProperties = {
    padding: 'var(--spacing-lg)',
    background: 'var(--forest-50)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border)',
    marginBottom: 'var(--spacing-xl)',
  }

  const legendStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'var(--spacing-md)',
    marginTop: 'var(--spacing-xl)',
  }

  const legendItemStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-sm)',
    fontSize: '14px',
    color: 'var(--text-secondary)',
  }

  const dotStyle = (color: string): CSSProperties => ({
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: color,
    border: '2px solid var(--surface-1)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  })

  return (
    <div style={containerStyle}>
      <Navbar />

      <main style={contentStyle}>
        <h1 style={sectionTitleStyle}>🗺️ Live Map</h1>

        <div style={infoBoxStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
            <div style={{ fontSize: '24px' }}>🚧</div>
            <h3 style={{ fontSize: '18px', fontWeight: 600 }}>
              กำลังพัฒนา
            </h3>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            ฟีเจอร์แผนที่สดจะแสดงตำแหน่งของคุณและเพื่อนแบบ Real-time บนแผนที่เกม<br />
            ใช้เทคโนโลยี WebSocket สำหรับการอัปเดตตำแหน่งทุกๆ 5 วินาที
          </p>
        </div>

        <div style={mapContainerStyle}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '96px', marginBottom: 'var(--spacing-lg)' }}>🗺️</div>
            <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--text-primary)' }}>
              Live Map
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
              กำลังพัฒนา - เร็วๆ นี้
            </p>
            <div style={{
              padding: 'var(--spacing-md) var(--spacing-xl)',
              background: 'var(--forest-100)',
              borderRadius: 'var(--radius-full)',
              fontSize: '14px',
              fontWeight: 600,
              color: '#fff',
              display: 'inline-block',
            }}>
              🚀 Coming Soon
            </div>
          </div>

          {/* Decorative grid overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.3,
            pointerEvents: 'none',
          }} />
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 600, marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
          📍 คำอธิบายสัญลักษณ์
        </h2>

        <div style={legendStyle}>
          <Card>
            <div style={legendItemStyle}>
              <div style={dotStyle('#4ade80')} />
              <span>คุณ</span>
            </div>
          </Card>

          <Card>
            <div style={legendItemStyle}>
              <div style={dotStyle('#60a5fa')} />
              <span>เพื่อนออนไลน์</span>
            </div>
          </Card>

          <Card>
            <div style={legendItemStyle}>
              <div style={dotStyle('#f97316')} />
              <span>Carnivore</span>
            </div>
          </Card>

          <Card>
            <div style={legendItemStyle}>
              <div style={dotStyle('#84cc16')} />
              <span>Herbivore</span>
            </div>
          </Card>

          <Card>
            <div style={legendItemStyle}>
              <div style={dotStyle('#8b5cf6')} />
              <span>POI (น้ำ, อาหาร)</span>
            </div>
          </Card>

          <Card>
            <div style={legendItemStyle}>
              <div style={dotStyle('#ef4444')} />
              <span>Danger Zone</span>
            </div>
          </Card>
        </div>

        <div style={{
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-xl)',
          background: 'var(--surface-1)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>
            💡 ฟีเจอร์ที่จะมา
          </h3>
          <ul style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            paddingLeft: 'var(--spacing-lg)',
            lineHeight: 1.8,
          }}>
            <li>แสดงตำแหน่งของคุณแบบ Real-time</li>
            <li>เห็นเพื่อนที่กำลังเล่นอยู่</li>
            <li>แสดง POI (จุดน้ำ, พื้นที่อาหาร)</li>
            <li>Ping บนแผนที่เพื่อบอกตำแหน่งให้เพื่อน</li>
            <li>ประวัติเส้นทางที่เดินมา</li>
            <li>Heat map ของพื้นที่เสี่ยง</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
