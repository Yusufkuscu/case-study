import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renart - Lüks Mücevher Koleksiyonu',
  description: 'Renart\'ın özenle seçilmiş nişan yüzükleri ve mücevher koleksiyonunu keşfedin. Gerçek zamanlı altın fiyatları ile dinamik fiyatlandırma.',
  keywords: ['mücevher', 'nişan yüzüğü', 'altın', 'elmas', 'lüks takı', 'renart'],
  openGraph: {
    title: 'Renart - Lüks Mücevher Koleksiyonu',
    description: 'Renart\'ın özenle seçilmiş nişan yüzükleri ve mücevher koleksiyonunu keşfedin.',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renart - Lüks Mücevher Koleksiyonu',
    description: 'Renart\'ın özenle seçilmiş nişan yüzükleri ve mücevher koleksiyonunu keşfedin.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}










// Yusuf KUŞÇU https://www.linkedin.com/in/yusufkuscu/