import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Script from 'next/script'

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GOPRFAQYOU',
  description: 'Go forward with AI-powered PRFAQ tools. Create compelling press releases and FAQs with ease.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GDKRMHPLZ0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GDKRMHPLZ0');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
