'use client'

import { CSSProperties, useState } from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { mockDinoParks, mockFoodPacks, mockSkins, mockCurrency } from '@/lib/mockData'

type ShopTab = 'park' | 'food' | 'skin'

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState<ShopTab>('park')

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

  const tabsContainerStyle: CSSProperties = {
    display: 'flex',
    gap: 'var(--spacing-sm)',
    marginBottom: 'var(--spacing-xl)',
    borderBottom: '2px solid var(--border)',
    paddingBottom: 'var(--spacing-sm)',
  }

  const tabStyle = (isActive: boolean): CSSProperties => ({
    padding: 'var(--spacing-md) var(--spacing-lg)',
    fontSize: '15px',
    fontWeight: 600,
    color: isActive ? '#fff' : 'var(--text-secondary)',
    background: isActive ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
    border: '1px solid',
    borderColor: isActive ? 'rgba(16, 185, 129, 0.3)' : 'transparent',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: isActive ? 'var(--glow-primary)' : 'none',
  })

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 'var(--spacing-lg)',
  }

  const itemTitleStyle: CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: 'var(--spacing-xs)',
  }

  const itemDescStyle: CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    marginBottom: 'var(--spacing-md)',
  }

  const priceStyle: CSSProperties = {
    fontSize: '24px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: 'var(--spacing-md)',
  }

  const currencyBadgeStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--spacing-xs)',
    padding: '4px 12px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 'var(--radius-full)',
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: 'var(--spacing-md)',
    color: '#fff',
  }

  const balanceStyle: CSSProperties = {
    padding: 'var(--spacing-md)',
    background: 'rgba(16, 185, 129, 0.05)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    borderRadius: 'var(--radius-md)',
    fontSize: '14px',
    color: '#fff',
    marginBottom: 'var(--spacing-xl)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: 'var(--shadow-sm)',
  }

  return (
    <div style={containerStyle}>
      <Navbar />

      <main style={contentStyle}>
        <h1 style={sectionTitleStyle}>🛒 ร้านค้า</h1>

        <div style={balanceStyle}>
          <div>
            <strong>ยอดเงินคงเหลือ:</strong> ⏱️ {mockCurrency.time.toLocaleString('th-TH')} Time • 💎 {mockCurrency.point.toLocaleString('th-TH')} Point • 💠 {mockCurrency.gems.toLocaleString('th-TH')} Gems
          </div>
          <Button size="sm">เติมเงิน</Button>
        </div>

        <div style={tabsContainerStyle}>
          <button style={tabStyle(activeTab === 'park')} onClick={() => setActiveTab('park')}>
            🏞️ Dino Park (เช่ารายเดือน)
          </button>
          <button style={tabStyle(activeTab === 'food')} onClick={() => setActiveTab('food')}>
            🍖 Food Boost Pack
          </button>
          <button style={tabStyle(activeTab === 'skin')} onClick={() => setActiveTab('skin')}>
            🎨 Dino Skins
          </button>
        </div>

        {activeTab === 'park' && (
          <>
            <div style={{ marginBottom: 'var(--spacing-lg)', padding: 'var(--spacing-md)', background: 'var(--forest-50)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                💡 <strong>Dino Park คืออะไร?</strong> เช่าไดโนที่เกิดมาแล้ว 50% ทันที ไม่ต้องรอเติบโต ระยะเวลา 1 เดือน ไม่มีแบบถาวร
              </p>
            </div>

            <div style={gridStyle}>
              {mockDinoParks.map((park) => (
                <Card key={park.id} hover>
                  <div style={{ fontSize: '48px', textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                    🦖
                  </div>
                  <div style={itemTitleStyle}>{park.name}</div>
                  <div style={itemDescStyle}>{park.description}</div>

                  <div style={currencyBadgeStyle}>
                    <span>💎</span>
                    <span>{park.pricePerMonth} Point / เดือน</span>
                  </div>

                  <div style={{ marginBottom: 'var(--spacing-md)', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    🦕 Species: <strong>{park.species}</strong><br />
                    📈 Growth: <strong>{park.maxGrowth * 100}%</strong> ทันที
                  </div>

                  <Button fullWidth>เช่า 1 เดือน</Button>
                </Card>
              ))}
            </div>
          </>
        )}

        {activeTab === 'food' && (
          <>
            <div style={{ marginBottom: 'var(--spacing-lg)', padding: 'var(--spacing-md)', background: 'var(--forest-50)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                💡 <strong>Food Boost Pack คืออะไร?</strong> เติมค่า Hunger, Thirst ให้ไดโนทันที ช่วยให้เล่นต่อได้โดยไม่ต้องหาอาหาร
              </p>
            </div>

            <div style={gridStyle}>
              {mockFoodPacks.map((pack) => (
                <Card key={pack.id} hover>
                  <div style={{ fontSize: '48px', textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                    🍖
                  </div>
                  <div style={itemTitleStyle}>{pack.name}</div>
                  <div style={itemDescStyle}>{pack.description}</div>

                  <div style={currencyBadgeStyle}>
                    <span>{pack.currency === 'time' ? '⏱️' : '💎'}</span>
                    <span>{pack.price} {pack.currency === 'time' ? 'Time' : 'Point'}</span>
                  </div>

                  <div style={{ marginBottom: 'var(--spacing-md)', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    🍖 Hunger: <strong>+{pack.hungerBoost}%</strong><br />
                    💧 Thirst: <strong>+{pack.thirstBoost}%</strong>
                  </div>

                  <Button fullWidth>ซื้อ</Button>
                </Card>
              ))}
            </div>
          </>
        )}

        {activeTab === 'skin' && (
          <>
            <div style={{ marginBottom: 'var(--spacing-lg)', padding: 'var(--spacing-md)', background: 'var(--forest-50)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                💡 <strong>Dino Skins</strong> สกินสมจริง ไม่แฟนตาซี เน้นสีที่เป็นไปได้ในธรรมชาติ จำหน่ายโดยแอดมินเท่านั้น
              </p>
            </div>

            <div style={gridStyle}>
              {mockSkins.map((skin) => (
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

                  <Button fullWidth>ซื้อสกิน</Button>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
