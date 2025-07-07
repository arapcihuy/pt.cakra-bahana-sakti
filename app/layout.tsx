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
      <body>
        <CartSidebarOpenProvider>
          {children}
          <ScrollToTopButton />
        </CartSidebarOpenProvider>
      </body>
    </html>
  )
}
