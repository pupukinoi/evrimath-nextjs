import { User, Currency, Dinosaur, DinoSkin, DinoPark, FoodBoostPack } from '@/types'

export const mockUser: User = {
  id: 'user_001',
  discordId: '123456789012345678',
  discordUsername: 'ThaiDinoLover',
  discordAvatar: 'https://cdn.discordapp.com/avatars/123456789012345678/a_1234567890abcdef.png',
  steamHex: '0x0110000101234567',
  linkedAt: new Date('2024-01-15T10:30:00Z'),
  createdAt: new Date('2024-01-15T10:30:00Z'),
}

export const mockCurrency: Currency = {
  userId: 'user_001',
  time: 2500,
  point: 150,
  gems: 5,
  lastTimeReward: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
  lastGemsReward: new Date(Date.now() - 90 * 60 * 1000), // 1.5 hours ago
}

export const mockDinosaurs: Dinosaur[] = [
  {
    id: 'dino_001',
    userId: 'user_001',
    species: 'Carnotaurus',
    growth: 0.85,
    health: 100,
    stamina: 85,
    hunger: 70,
    thirst: 80,
    location: 'South Plains',
    isActive: true,
    skinId: 'skin_carno_001',
    createdAt: new Date('2024-09-10T14:20:00Z'),
    updatedAt: new Date(),
  },
  {
    id: 'dino_002',
    userId: 'user_001',
    species: 'Dryosaurus',
    growth: 1.0,
    health: 100,
    stamina: 100,
    hunger: 90,
    thirst: 95,
    location: 'Forest River',
    isActive: false,
    skinId: null,
    createdAt: new Date('2024-09-05T08:15:00Z'),
    updatedAt: new Date(),
  },
]

export const mockSkins: DinoSkin[] = [
  {
    id: 'skin_carno_001',
    species: 'Carnotaurus',
    name: 'Halloween Shadow',
    description: 'สีดำแดงส้มแบบ Halloween แต่ยังคงความสมจริง',
    imageUrl: '/skins/carno-halloween.jpg',
    price: 200,
    currency: 'point',
    isLimited: true,
    stock: 15,
    createdAt: new Date('2024-10-01T00:00:00Z'),
  },
  {
    id: 'skin_trex_001',
    species: 'Tyrannosaurus',
    name: 'Forest Alpha',
    description: 'สีเขียวเข้มผสมน้ำตาลดิน เหมาะกับป่าทึบ',
    imageUrl: '/skins/trex-forest.jpg',
    price: 500,
    currency: 'point',
    isLimited: false,
    stock: null,
    createdAt: new Date('2024-08-15T00:00:00Z'),
  },
  {
    id: 'skin_galli_001',
    species: 'Gallimimus',
    name: 'Desert Runner',
    description: 'สีทรายอ่อนกับลายน้ำตาล วิ่งข้ามทะเลทรายแบบมืออาชีพ',
    imageUrl: '/skins/galli-desert.jpg',
    price: 3,
    currency: 'gems',
    isLimited: false,
    stock: null,
    createdAt: new Date('2024-09-01T00:00:00Z'),
  },
]

export const mockDinoParks: DinoPark[] = [
  {
    id: 'park_001',
    species: 'Tyrannosaurus',
    name: 'T-Rex Premium Park',
    description: 'เช่า T-Rex เติบโต 50% ทันที รายเดือน',
    pricePerMonth: 300,
    maxGrowth: 0.5,
  },
  {
    id: 'park_002',
    species: 'Carnotaurus',
    name: 'Carno Fast Track',
    description: 'เช่า Carnotaurus เติบโต 50% ทันที รายเดือน',
    pricePerMonth: 250,
    maxGrowth: 0.5,
  },
  {
    id: 'park_003',
    species: 'Gallimimus',
    name: 'Galli Sprint Pack',
    description: 'เช่า Gallimimus เติบโต 50% ทันที รายเดือน',
    pricePerMonth: 100,
    maxGrowth: 0.5,
  },
]

export const mockFoodPacks: FoodBoostPack[] = [
  {
    id: 'food_pack_a',
    name: 'Pack A - เติมหิวคร่าว',
    description: '+30% Hunger, +20% Thirst',
    hungerBoost: 30,
    thirstBoost: 20,
    price: 200,
    currency: 'time',
  },
  {
    id: 'food_pack_b',
    name: 'Pack B - เติมกลาง',
    description: '+50% Hunger, +40% Thirst',
    hungerBoost: 50,
    thirstBoost: 40,
    price: 400,
    currency: 'time',
  },
  {
    id: 'food_pack_y',
    name: 'Pack Y - เติมเต็มทันทีทั้งหมด',
    description: '+100% Hunger, +100% Thirst, +100% Stamina',
    hungerBoost: 100,
    thirstBoost: 100,
    price: 50,
    currency: 'point',
  },
]
