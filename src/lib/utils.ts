export function formatGrowth(growth: number): string {
  return `${(growth * 100).toFixed(1)}%`
}

export function getGrowthStage(growth: number): string {
  if (growth < 0.25) return 'Hatchling (0-25%)'
  if (growth < 0.50) return 'Juvenile (25-50%)'
  if (growth < 0.75) return 'Sub-Adult (50-75%)'
  if (growth < 1.0) return 'Adult (75-100%)'
  return 'Full Adult (100%)'
}

export function formatPlaytime(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours} ชม. ${mins} นาที`
}

export function canTeleport(
  playerHealth: number,
  playerStamina: number,
  playerHunger: number,
  playerThirst: number,
  friendHealth: number,
  friendStamina: number,
  friendHunger: number,
  friendThirst: number,
  lastTeleport: Date | null
): { canTp: boolean; reason?: string } {
  // Check cooldown
  if (lastTeleport) {
    const thirtyMinutesAgo = Date.now() - 30 * 60 * 1000
    if (lastTeleport.getTime() > thirtyMinutesAgo) {
      return { canTp: false, reason: 'Cooldown ยังไม่หมด' }
    }
  }

  // Check player stats
  if (playerHealth < 100) return { canTp: false, reason: 'Health ของคุณต้องเต็m 100%' }
  if (playerStamina < 100) return { canTp: false, reason: 'Stamina ของคุณต้องเต็ม 100%' }
  if (playerHunger < 100) return { canTp: false, reason: 'Hunger ของคุณต้องเต็ม 100%' }
  if (playerThirst < 100) return { canTp: false, reason: 'Thirst ของคุณต้องเต็ม 100%' }

  // Check friend stats
  if (friendHealth < 100) return { canTp: false, reason: 'Health ของเพื่อนต้องเต็ม 100%' }
  if (friendStamina < 100) return { canTp: false, reason: 'Stamina ของเพื่อนต้องเต็ม 100%' }
  if (friendHunger < 100) return { canTp: false, reason: 'Hunger ของเพื่อนต้องเต็ม 100%' }
  if (friendThirst < 100) return { canTp: false, reason: 'Thirst ของเพื่อนต้องเต็ม 100%' }

  return { canTp: true }
}

export function getCooldownMinutes(lastTeleport: Date | null): number {
  if (!lastTeleport) return 0
  const thirtyMinutes = 30 * 60 * 1000
  const elapsed = Date.now() - lastTeleport.getTime()
  return Math.max(0, Math.ceil((thirtyMinutes - elapsed) / 60000))
}

export function formatCurrency(amount: number, type: 'time' | 'point' | 'gems'): string {
  const emoji = type === 'time' ? '⏱️' : type === 'point' ? '💎' : '💠'
  const name = type === 'time' ? 'Time' : type === 'point' ? 'Point' : 'Gems'
  return `${emoji} ${amount.toLocaleString('th-TH')} ${name}`
}
