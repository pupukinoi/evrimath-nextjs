export interface User {
  id: string
  discordId: string
  discordUsername: string
  discordAvatar: string
  steamHex: string | null
  linkedAt: Date | null
  createdAt: Date
}

export interface Currency {
  userId: string
  time: number
  point: number
  gems: number
  lastTimeReward: Date
  lastGemsReward: Date
}

export interface Dinosaur {
  id: string
  userId: string
  species: string
  growth: number
  health: number
  stamina: number
  hunger: number
  thirst: number
  location: string
  isActive: boolean
  skinId: string | null
  createdAt: Date
  updatedAt: Date
}

export interface DinoSkin {
  id: string
  species: string
  name: string
  description: string
  imageUrl: string
  price: number
  currency: 'point' | 'gems'
  isLimited: boolean
  stock: number | null
  createdAt: Date
}

export interface DinoPark {
  id: string
  species: string
  name: string
  description: string
  pricePerMonth: number
  maxGrowth: number
}

export interface FoodBoostPack {
  id: string
  name: string
  description: string
  hungerBoost: number
  thirstBoost: number
  price: number
  currency: 'time' | 'point'
}

export interface Friend {
  userId: string
  friendId: string
  createdAt: Date
  lastTeleport: Date | null
}

export interface PromoCode {
  code: string
  rewardType: 'time' | 'point' | 'gems'
  rewardAmount: number
  maxUses: number
  currentUses: number
  expiresAt: Date | null
  createdAt: Date
}

export interface LeaderboardEntry {
  rank: number
  userId: string
  discordUsername: string
  discordAvatar: string
  playtime: number
  totalKills: number
  totalDeaths: number
}

export interface MarketListing {
  id: string
  sellerId: string
  skinId: string
  price: number
  currency: 'point' | 'gems'
  isActive: boolean
  createdAt: Date
}
