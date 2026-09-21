import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Providers from '@/components/Providers'

const notoSansThai = localFont({
  src: [
    {
      path: '../../font/static/NotoSansThai-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../font/static/NotoSansThai-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../font/static/NotoSansThai-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../font/static/NotoSansThai-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../font/static/NotoSansThai-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-noto-sans-thai',
})

export const metadata: Metadata = {
  title: 'EvrimaTH - The Isle: Evrima Thailand',
  description: 'ระบบจัดการไดโนและเว็บไซต์สำหรับเซิร์ฟเวอร์ The Isle: Evrima Thailand',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body className={notoSansThai.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
