'use client'

import { CSSProperties, useState } from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { mockSkins, mockCurrency } from '@/lib/mockData'

export default function MarketPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'limited' | 'admin'>('all')

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

  const filterContainerStyle: CSSProperties = {
    display: 'flex',
    gap: 'var(--spacing-sm)',
    marginBottom: 'var(--spacing-xl)',
  }

  const filterButtonStyle = (isActive: boolean): CSSProperties => ({
    padding: 'var(--spacing-sm) var(--spacing-md)',
    fontSize: '14px',
    fontWeight: 600,
    color: isActive ? 'white' : 'var(--text-secondary)',
    background: isActive ? 'var(--forest-600)' : 'var(--surface-2)',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    cursor: 'pointer',
    transition: 'all 0.2s',
  })

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 'var(--spacing-lg)',
  }

  const itemTitleStyle: CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: 'var(--spacing-xs)',
  }

  const itemDescStyle: CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    marginBottom: 'var(--spacing-md)',
  }

  const currencyBadgeStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--spacing-xs)',
    padding: '4px 12px',
    background: 'var(--surface-2)',
    borderRadius: 'var(--radius-full)',
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: 'var(--spacing-md)',
  }

  const infoBoxStyle: CSSProperties = {
    padding: 'var(--spacing-lg)',
    background: 'var(--forest-50)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border)',
    marginBottom: 'var(--spacing-xl)',
  }

  const balanceStyle: CSSProperties = {
    padding: 'var(--spacing-md)',
    background: 'var(--surface-1)',
    borderRadius: 'var(--radius-md)',
    fontSize: '14px',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--spacing-md)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const filteredSkins = mockSkins.filter((skin) => {
    if (selectedFilter === 'all') return true
    if (selectedFilter === 'limited') return skin.isLimited
    if (selectedFilter === 'admin') return true // All skins are from admin in mockData
    return true
  })

  return (
    <div style={containerStyle}>
      <Navbar />

      <main style={contentStyle}>
        <h1 style={sectionTitleStyle}>🦖 ตลาดไดโน</h1>

        <div style={infoBoxStyle}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
            💡 เกี่ยวกับตลาดไดโน
          </h3>
          <ul style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            paddingLeft: 'var(--spacing-lg)',
            lineHeight: 1.8,
          }}>
            <li><strong>ขายโดยแอดมินเท่านั้น:</strong> สกินทุกตัวออกแบบและจำหน่ายโดยแอดมิน</li>
            <li><strong>สมจริง ไม่แฟนตาซี:</strong> เน้นสีที่เป็นไปได้ในธรรมชาติ เช่น สีดินป่าเขียว ทะเลทราย หินเทา</li>
            <li><strong>Limited Edition:</strong> บางสกินมีจำนวนจำกัด เช่น Halloween, Christmas</li>
            <li><strong>ผู้เล่นขายได้:</strong> ซื้อสกินมาแล้วสามารถขายต่อให้ผู้เล่นคนอื่นได้ (เร็วๆ นี้)</li>
          </ul>
        </div>

        <div style={balanceStyle}>
          <div>
            <strong>ยอดเงินคงเหลือ:</strong> 💎 {mockCurrency.point.toLocaleString('th-TH')} Point • 💠 {mockCurrency.gems.toLocaleString('th-TH')} Gems
          </div>
          <Button size="sm">เติมเงิน</Button>
        </div>

        <div style={filterContainerStyle}>
          <button
            style={filterButtonStyle(selectedFilter === 'all')}
            onClick={() => setSelectedFilter('all')}
          >
            🌐 ทั้งหมด
          </button>
          <button
            style={filterButtonStyle(selectedFilter === 'limited')}
            onClick={() => setSelectedFilter('limited')}
          >
            ⭐ Limited Edition
          </button>
          <button
            style={filterButtonStyle(selectedFilter === 'admin')}
            onClick={() => setSelectedFilter('admin')}
          >
            👑 Official Shop
          </button>
        </div>

        <div style={gridStyle}>
          {filteredSkins.map((skin) => (
            <Card key={skin.id} hover>
              <div style={{
                width: '100%',
                height: '200px',
                background: 'var(--surface-2)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
                display: 'grid',
                placeItems: 'center',
                fontSize: '64px',
              }}>
                🦖
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-xs)' }}>
                <div style={itemTitleStyle}>{skin.name}</div>
                {skin.isLimited && (
                  <div style={{
                    padding: '2px 8px',
                    background: 'var(--forest-700)',
                    color: 'white',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '11px',
                    fontWeight: 600,
                  }}>
                    LIMITED
                  </div>
                )}
              </div>

              <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: 'var(--spacing-xs)' }}>
                🦕 {skin.species}
              </div>

              <div style={itemDescStyle}>{skin.description}</div>

              {skin.isLimited && skin.stock !== null && (
                <div style={{ fontSize: '12px', color: '#fff', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
                  📦 เหลือ {skin.stock} ชิ้น
                </div>
              )}

              <div style={currencyBadgeStyle}>
                <span>{skin.currency === 'point' ? '💎' : '💠'}</span>
                <span>{skin.price} {skin.currency === 'point' ? 'Point' : 'Gems'}</span>
              </div>

              <div style={{
                padding: 'var(--spacing-sm)',
                background: 'var(--surface-2)',
                borderRadius: 'var(--radius-md)',
                fontSize: '12px',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--spacing-md)',
              }}>
                👑 จำหน่ายโดยแอดมิน
              </div>

              <Button fullWidth>ซื้อสกิน</Button>
            </Card>
          ))}
        </div>

        <div style={{
          marginTop: 'var(--spacing-2xl)',
          padding: 'var(--spacing-xl)',
          background: 'var(--surface-1)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '48px', marginBottom: 'var(--spacing-md)' }}>🔜</div>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
            ตลาดผู้เล่น (Player Market)
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            เร็วๆ นี้คุณจะสามารถซื้อ-ขายสกินกับผู้เล่นคนอื่นได้<br />
            ราคาตั้งเอง ระบบปลอดภัย รับเงินทันที
          </p>
        </div>
      </main>
    </div>
  )
}
