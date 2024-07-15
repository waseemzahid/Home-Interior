import { Sen } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '../components/ThemeProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'

const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Home Interior',
  description: 'Developed by Waseem Zahid (Next JS App)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sen.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
