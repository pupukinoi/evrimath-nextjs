'use client'

import { CSSProperties, useState } from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Button from '@/components/Button'

interface PromoCode {
  code: string
  rewardType: 'time' | 'point' | 'gems'
  rewardAmount: number
  expiresAt: Date | null
}

const activePromoCodes: PromoCode[] = [
  {
    code: 'WELCOME2024',
    rewardType: 'time',
    rewardAmount: 1000,
    expiresAt: null,
  },
  {
    code: 'LAUNCH50',
    rewardType: 'point',
    rewardAmount: 50,
    expiresAt: new Date('2024-12-31'),
  },
]

export default function PromoPage() {
  const [promoCode, setPromoCode] = useState('')
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    background: 'var(--surface-bg)',
  }

  const contentStyle: CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: 'var(--spacing-xl)',
  }

  const sectionTitleStyle: CSSProperties = {
    fontSize: 'clamp(24px, 4vw, 32px)',
    fontWeight: 700,
    color: '#fff',
    marginBottom: 'var(--spacing-lg)',
  }

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: 'var(--spacing-md)',
    fontSize: '18px',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-mono)',
    background: 'var(--surface-1)',
    color: 'var(--text-primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    textAlign: 'center',
  }

  const messageStyle = (type: 'success' | 'error'): CSSProperties => ({
    padding: 'var(--spacing-md)',
    borderRadius: 'var(--radius-md)',
    fontSize: '14px',
    fontWeight: 500,
    background: type === 'success' ? 'var(--forest-100)' : '#fee2e2',
    color: type === 'success' ? 'var(--forest-700)' : '#991b1b',
    marginTop: 'var(--spacing-md)',
  })

  const infoBoxStyle: CSSProperties = {
    padding: 'var(--spacing-lg)',
    background: 'var(--forest-50)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border)',
    marginBottom: 'var(--spacing-xl)',
  }

  const handleSubmit = () => {
    if (!promoCode.trim()) {
      setMessage({ type: 'error', text: 'กรุณาใส่โค้ด' })
      return
    }

    const code = activePromoCodes.find(c => c.code.toUpperCase() === promoCode.toUpperCase())

    if (!code) {
      setMessage({ type: 'error', text: 'โค้ดไม่ถูกต้องหรือหมดอายุแล้ว' })
      return
    }

    const currencyEmoji = code.rewardType === 'time' ? '⏱️' : code.rewardType === 'point' ? '💎' : '💠'
    const currencyName = code.rewardType === 'time' ? 'Time' : code.rewardType === 'point' ? 'Point' : 'Gems'

    setMessage({
      type: 'success',
      text: `✅ รับ ${currencyEmoji} ${code.rewardAmount} ${currencyName} สำเร็จ!`
    })

    setPromoCode('')
  }

  return (
    <div style={containerStyle}>
      <Navbar />

      <main style={contentStyle}>
        <h1 style={sectionTitleStyle}>🎁 ใส่โค้ดโปรโมชั่น</h1>

        <Card style={{ marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
              <div style={{ fontSize: '64px', marginBottom: 'var(--spacing-sm)' }}>🎁</div>
              <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>
                ใส่โค้ดรับของรางวัล
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                รับ Time, Point หรือ Gems ฟรี!
              </p>
            </div>

            <input
              type="text"
              placeholder="ใส่โค้ดที่นี่"
              style={inputStyle}
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />

            <Button onClick={handleSubmit} size="lg" fullWidth>
              ยืนยัน
            </Button>

            {message && (
              <div style={messageStyle(message.type)}>
                {message.text}
              </div>
            )}
          </div>
        </Card>

        <div style={infoBoxStyle}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>
            💡 วิธีรับโค้ดโปรโมชั่น
          </h3>
          <ul style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            paddingLeft: 'var(--spacing-lg)',
            lineHeight: 1.8,
          }}>
            <li>ติดตาม Discord Server อย่างเป็นทางการ</li>
            <li>ร่วม Event และกิจกรรมพิเศษ</li>
            <li>รับโค้ดจากผู้จัดทัวร์นาเมนต์</li>
            <li>โค้ดบางตัวมีจำนวนจำกัด ใช้เร็วได้เปรียบ!</li>
          </ul>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
          📋 ตัวอย่างโค้ดที่ใช้งานได้ (สำหรับทดสอบ)
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {activePromoCodes.map((code) => {
            const currencyEmoji = code.rewardType === 'time' ? '⏱️' : code.rewardType === 'point' ? '💎' : '💠'
            const currencyName = code.rewardType === 'time' ? 'Time' : code.rewardType === 'point' ? 'Point' : 'Gems'

            return (
              <Card key={code.code} hover style={{ cursor: 'pointer' }} onClick={() => setPromoCode(code.code)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)',
                      color: '#fff',
                      marginBottom: 'var(--spacing-xs)',
                    }}>
                      {code.code}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      รับ {currencyEmoji} {code.rewardAmount} {currencyName}
                    </div>
                    {code.expiresAt && (
                      <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                        หมดอายุ: {code.expiresAt.toLocaleDateString('th-TH')}
                      </div>
                    )}
                  </div>
                  <div style={{
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    background: 'var(--forest-100)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#fff',
                  }}>
                    คลิกเพื่อใช้
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div style={{
          marginTop: 'var(--spacing-2xl)',
          padding: 'var(--spacing-xl)',
          background: 'var(--surface-1)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <strong>หมายเหตุ:</strong> โค้ดแต่ละตัวใช้ได้ครั้งเดียวต่อบัญชี<br />
            โค้ดบางตัวมีจำนวนจำกัด หากครบแล้วจะไม่สามารถใช้งานได้
          </div>
        </div>
      </main>
    </div>
  )
}
