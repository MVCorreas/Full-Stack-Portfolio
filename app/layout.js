import { Inter } from 'next/font/google'
import './globals.css'
import './Styles/custom.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className='Whatsapp-container'>
          <a href='http://wa.me/+5492615520011' target='blanket' className='whatsapp-icon'>
            <img className='img-Whatsapp' src='./Whatsapp-icon.png' alt='' />
          </a>
        </div>
      </body>
    </html>
  )
}
