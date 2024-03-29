import './/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import sal from 'sal.js';
import Script from 'next/script';
import { DM_Sans } from 'next/font/google';

const dmsans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pollycon | Senior Shopify Developer',
  description: 'Over the last ten years, I\'ve been lucky enough to work with some of the best agencies in the UK...',
  keywords: 'Shopify, Developer, Freelance, West Yorkshire, UK',
  twitter: {
    site: '@jamiethroup'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-8WZ6P6V99R" />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-8WZ6P6V99R');
      `}
    </Script>
      <body className={`${dmsans.variable} font-dm_sans`}>
      <main>{children}</main>
      <Analytics />
      </body>
    </html>
  )
}
