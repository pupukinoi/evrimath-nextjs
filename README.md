# EvrimaTH Web

ระบบเว็บจัดการไดโน, ร้านค้า และโซเชียลสำหรับเซิร์ฟเวอร์ The Isle: Evrima Thailand

## 🎯 ฟีเจอร์

### ระบบเงิน 3 รูปแบบ
- **⏱️ Time** - ได้ 500 Time ทุก 45 นาที เล่นเกม (ใช้ซื้อของในเกมผ่าน web)
- **💎 Point** - เติมเงินจริง ขั้นต่ำ 50 บาท (ใช้ซื้อของพิเศษ)
- **💠 Gems** - ได้ 1 Gems ทุก 2 ชั่วโมงเล่น (แลกไดโนเกิดมา 50%)

### หน้าเว็บหลัก
1. **🏠 หน้าแรก** - Landing page + ขั้นตอนการใช้งาน
2. **👤 โปรไฟล์** - ข้อมูลผู้เล่น, ยอดเงิน, สถิติ
3. **🏆 อันดับ** - Leaderboard ผู้เล่น (เวลาเล่น, K/D, Kills)
4. **👥 เพื่อน** - เพิ่มเพื่อน, Teleport (cooldown 30 นาที, ต้อง Health/Stamina/Hunger/Thirst 100%)
5. **🛒 ร้านค้า**
   - Dino Park (เช่ารายเดือน, ไดโนเกิดมา 50%)
   - Food Boost Pack (เติม Hunger/Thirst ทันที)
   - Dino Skins (สมจริง ไม่แฟนตาซี)
6. **🎁 Promo Code** - ใส่โค้ดรับของรางวัล
7. **🦖 ตลาดไดโน** - ซื้อ-ขายสกิน (แอดมินขายเท่านั้น ตอนนี้)
8. **📦 คลังไดโน** - จัดการไดโน, ดูสถานะ (เริ่มต้น 2 ช่อง ฟรี)
9. **🗺️ Live Map** - แผนที่สด Real-time (กำลังพัฒนา)

### การเชื่อมต่อ
1. เชื่อมต่อ Discord
2. ใส่ Steam Hex ID
3. เข้าเกมพิมพ์ `!codeweb` รับโค้ด 6 หลัก
4. กลับมาเว็บใส่โค้ดเพื่อลิงค์ตัวละครในเกม

## 🎨 Design System

### Theme: ขาว-ป่า Minimal
- **Surface**: 5-level tonal ladder (#F8FAF5 → #FFFFFF)
- **Primary**: Forest green (#4A7C59, #2D5940)
- **Typography**: Sarabun (ไทย + อังกฤษ)
- **Icons**: SVG minimal emoji style
- **Layout**: Grid-first, fully rounded corners

### Font
ใช้ Sarabun จาก `D:\EvrimaThailand\web\font`:
- Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)

## 🚀 Getting Started

```bash
# ติดตั้ง dependencies
npm install

# รัน dev server
npm run dev

# เปิดเว็บ
http://localhost:3000
```

## 📁 โครงสร้าง

```
web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # หน้าแรก
│   │   ├── dashboard/         # Dashboard
│   │   ├── profile/           # โปรไฟล์
│   │   ├── shop/              # ร้านค้า
│   │   ├── market/            # ตลาดไดโน
│   │   ├── storage/           # คลังไดโน
│   │   ├── friends/           # เพื่อน
│   │   ├── leaderboard/       # อันดับ
│   │   ├── promo/             # Promo Code
│   │   ├── map/               # Live Map
│   │   └── auth/discord/      # Discord OAuth
│   ├── components/            # React components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Navbar.tsx
│   └── lib/                   # Utilities
│       ├── mockData.ts        # Mock data
│       └── utils.ts           # Helper functions
├── font/                      # Sarabun fonts
└── public/                    # Static assets
```

## 🔧 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS-in-JS (inline styles)
- **Font**: Sarabun (Thai + Latin)
- **Deployment**: Cloudflare Pages (.dev domain)

## 📝 TODO

- [ ] Implement Discord OAuth
- [ ] Connect to backend API
- [ ] Implement payment gateway (Point)
- [ ] Live Map WebSocket integration
- [ ] Player market (P2P skin trading)
- [ ] Admin panel

## 🌐 Domain

- Development: `localhost:3000`
- Production: `evrimaTH.pages.dev` (Cloudflare)

## 📄 License

Private - EvrimaTH Server Only
