// Currency utilities

export function formatCurrency(amount: number, type: 'time' | 'point' | 'gems'): string {
  const formatted = new Intl.NumberFormat('th-TH').format(amount)

  switch (type) {
    case 'time':
      return `${formatted} ⏱️`
    case 'point':
      return `${formatted} 💎`
    case 'gems':
      return `${formatted} 💠`
    default:
      return formatted
  }
}

export function canAfford(
  userCurrency: { time: number; point: number; gems: number },
  cost: { time?: number; point?: number; gems?: number }
): boolean {
  if (cost.time && userCurrency.time < cost.time) return false
  if (cost.point && userCurrency.point < cost.point) return false
  if (cost.gems && userCurrency.gems < cost.gems) return false
  return true
}

// Time-based currency earning (500 Time per 45 minutes)
export function calculateTimeEarned(minutesPlayed: number): number {
  const cycles = Math.floor(minutesPlayed / 45)
  return cycles * 500
}

// Gems earning (1 Gem per 2 hours)
export function calculateGemsEarned(minutesPlayed: number): number {
  const cycles = Math.floor(minutesPlayed / 120)
  return cycles
}

// Check if user can earn Time (45 minute cooldown)
export function canEarnTime(lastEarned: Date | null): boolean {
  if (!lastEarned) return true
  const now = new Date()
  const diff = now.getTime() - lastEarned.getTime()
  const minutesDiff = diff / (1000 * 60)
  return minutesDiff >= 45
}

// Check if user can earn Gems (2 hour cooldown)
export function canEarnGems(lastEarned: Date | null): boolean {
  if (!lastEarned) return true
  const now = new Date()
  const diff = now.getTime() - lastEarned.getTime()
  const minutesDiff = diff / (1000 * 60)
  return minutesDiff >= 120
}

// Get minutes until next earning
export function getMinutesUntilNextEarning(
  lastEarned: Date | null,
  type: 'time' | 'gems'
): number {
  if (!lastEarned) return 0

  const cooldown = type === 'time' ? 45 : 120
  const now = new Date()
  const diff = now.getTime() - lastEarned.getTime()
  const minutesPassed = diff / (1000 * 60)
  const remaining = cooldown - minutesPassed

  return Math.max(0, Math.ceil(remaining))
}

// Format remaining time
export function formatRemainingTime(minutes: number): string {
  if (minutes === 0) return 'พร้อมรับ!'

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hours > 0) {
    return `${hours} ชม. ${mins} นาที`
  }
  return `${mins} นาที`
}
