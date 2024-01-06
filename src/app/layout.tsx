
// !Packages
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

// !Components
import Nav from '../components/global/Nav'
import Footer from '../components/global/Footer'

const montserrat = Montserrat({ subsets: ['latin'], variable: "--font-mont" }) //font optimization

export const metadata = {
  title: "Brendan Cordova's Portfolio",
  description: 'Stunning portfolio by Brendan Cordova',
  icons: {
    icon: "/profile_portfolio.svg"
  }
}

export const log = console.log.bind(console)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
