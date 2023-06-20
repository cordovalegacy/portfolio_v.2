import Footer from './components/Footer'
import Nav from './components/Nav'
import './globals.css'
import { Montserrat } from 'next/font/google' //fonts

const montserrat = Montserrat({ subsets: ['latin'], variable: "--font-mont" }) //font optimization

export const metadata = {
  title: "Brendan Cordova's Portfolio",
  description: 'Stunning portfolio by Brendan Cordova',
  icons: {
    icon: "/profile_portfolio.svg"
  }
}

export const log = console.log.bind(console)  //short hand console.log

export default function RootLayout({
  children, //these are the props
}: {
  children: React.ReactNode //these are the props type
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
