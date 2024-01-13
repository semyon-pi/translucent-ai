import { Inter } from 'next/font/google'
import Header from "./components/header/Header"
import styles from './styles/_global.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | Blue Origin',
  description: 'blueorigin.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
        </body>
    </html>
  )
}
