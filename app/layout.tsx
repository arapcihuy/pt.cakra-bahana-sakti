import type { Metadata } from 'next'
import './globals.css'
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { CartSidebarOpenProvider } from "@/components/CartSidebarOpenProvider";

export const metadata: Metadata = {
  title: 'PT. CAKRA BAHANA SAKTI',
  description: 'Produsen Peralatan Listrik dan Aksesoris Gardu Induk',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PT. CAKRA BAHANA SAKTI",
            "url": "https://www.cakrabahanasakti.com/",
            "logo": "https://www.cakrabahanasakti.com/images/logo-cbs.png"
          })
        }} />
        <meta name="description" content="PT. CAKRA BAHANA SAKTI adalah produsen peralatan listrik, aksesoris gardu induk, dan solusi industri terpercaya di Indonesia." />
      </head>
      <body>
        <CartSidebarOpenProvider>
          {children}
          <ScrollToTopButton />
        </CartSidebarOpenProvider>
      </body>
    </html>
  )
}
