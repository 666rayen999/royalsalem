import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marhaba Royal Salem Map',
  description: 'A simplified map for Marhaba Royal Salem',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-darkest fill-darkest bg-lightest no-scrollbar`}>{children}</body>
    </html>
  )
}
