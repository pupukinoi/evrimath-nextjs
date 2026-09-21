'use client'

import { CSSProperties } from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'

interface LeaderboardEntry {
  rank: number
  discordUsername: string
  discordAvatar: string
  playtime: number
  totalKills: number
  totalDeaths: number
  kdr: number
}

const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    discordUsername: 'ApexPredator',
    discordAvatar: '',
    playtime: 342,
    totalKills: 156,
    totalDeaths: 23,
    kdr: 6.78,
  },
  {
    rank: 2,
    discordUsername: 'RexKing',
    discordAvatar: '',
    playtime: 298,
    totalKills: 134,
    totalDeaths: 31,
    kdr: 4.32,
  },
  {
    rank: 3,
    discordUsername: 'CarnoMaster',
    discordAvatar: '',
    playtime: 276,
    totalKills: 118,
    totalDeaths: 28,
    kdr: 4.21,
  },
  {
    rank: 4,
    discordUsername: 'ThaiDinoLover',
    discordAvatar: '',
    playtime: 245,
    totalKills: 89,
    totalDeaths: 34,
    kdr: 2.62,
  },
  {
    rank: 5,
    discordUsername: 'JungleRunner',
    discordAvatar: '',
    playtime: 223,
    totalKills: 76,
    totalDeaths: 41,
    kdr: 1.85,
  },
]

export default function LeaderboardPage() {
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

  const tableContainerStyle: CSSProperties = {
    background: 'var(--surface-1)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border)',
    overflow: 'hidden',
  }

  const tableStyle: CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
  }

  const thStyle: CSSProperties = {
    padding: 'var(--spacing-md)',
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    background: 'var(--surface-2)',
    borderBottom: '2px solid var(--border)',
  }

  const tdStyle: CSSProperties = {
    padding: 'var(--spacing-md)',
    fontSize: '14px',
    color: 'var(--text-primary)',
    borderBottom: '1px solid var(--border)',
  }

  const rankBadgeStyle = (rank: number): CSSProperties => ({
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    fontSize: '16px',
    fontWeight: 700,
    background: rank === 1 ? '#ffd700' : rank === 2 ? '#c0c0c0' : rank === 3 ? '#cd7f32' : 'var(--surface-3)',
    color: rank <= 3 ? 'white' : 'var(--text-primary)',
  })

  const avatarStyle: CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'var(--forest-200)',
    display: 'grid',
    placeItems: 'center',
    fontSize: '20px',
  }

  const playerCellStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md)',
  }

  const infoBoxStyle: CSSProperties = {
    padding: 'var(--spacing-lg)',
    background: 'var(--forest-50)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border)',
    marginBottom: 'var(--spacing-xl)',
  }

  const statsGridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
    fontSize: 'clamp(24px, 4vw, 32px)',
    fontWeight: 700,
    color: '#fff',
  }

  return (
    <div style={containerStyle}>
      <Navbar />

      <main style={contentStyle}>
        <h1 style={sectionTitleStyle}>🏆 อันดับผู้เล่น</h1>

        <div style={infoBoxStyle}>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            💡 อันดับคำนวณจาก: เวลาเล่นรวม, จำนวนคิล, K/D Ratio และจำนวนไดโนที่เก็บในคลัง
          </div>
        </div>

        <div style={statsGridStyle}>
          <Card>
            <div style={statCardStyle}>
              <div style={statLabelStyle}>🎮 ผู้เล่นทั้งหมด</div>
              <div style={statValueStyle}>1,234</div>
            </div>
          </Card>

          <Card>
            <div style={statCardStyle}>
              <div style={statLabelStyle}>🟢 กำลังออนไลน์</div>
              <div style={statValueStyle}>89</div>
            </div>
          </Card>

          <Card>
            <div style={statCardStyle}>
              <div style={statLabelStyle}>📈 เพิ่มขึ้นวันนี้</div>
              <div style={statValueStyle}>+23</div>
            </div>
          </Card>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
          Top 100 Players
        </h2>

        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: '80px' }}>อันดับ</th>
                <th style={thStyle}>ผู้เล่น</th>
                <th style={{ ...thStyle, textAlign: 'center' }}>⏱️ เวลาเล่น</th>
                <th style={{ ...thStyle, textAlign: 'center' }}>💀 Kills</th>
                <th style={{ ...thStyle, textAlign: 'center' }}>☠️ Deaths</th>
                <th style={{ ...thStyle, textAlign: 'center' }}>📊 K/D Ratio</th>
              </tr>
            </thead>
            <tbody>
              {mockLeaderboard.map((entry) => (
                <tr key={entry.rank} style={{ transition: 'background 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-2)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={tdStyle}>
                    <div style={rankBadgeStyle(entry.rank)}>
                      {entry.rank <= 3 ? (entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉') : entry.rank}
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <div style={playerCellStyle}>
                      <div style={avatarStyle}>👤</div>
                      <span style={{ fontWeight: 600 }}>{entry.discordUsername}</span>
                    </div>
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>
                    {entry.playtime} ชม.
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'center', color: '#fff', fontWeight: 600 }}>
                    {entry.totalKills}
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>
                    {entry.totalDeaths}
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'center', fontWeight: 600 }}>
                    {entry.kdr.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          background: 'var(--surface-1)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            อันดับของคุณ: <strong style={{ color: '#fff' }}>#4</strong> • เวลาเล่น: <strong>245 ชม.</strong> • K/D: <strong>2.62</strong>
          </div>
        </div>
      </main>
    </div>
  )
}
