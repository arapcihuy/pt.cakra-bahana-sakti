"use client"
import '@/lib/i18n';

import { useState, useRef } from "react"
import Link from "next/link"
import { Menu, Search, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTranslation } from 'react-i18next'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showLang, setShowLang] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { t, i18n } = useTranslation()

  const navigation = [
    { name: "beranda", href: "/" },
    { name: "tujuan_perusahaan", href: "/corporate-goals" },
    { name: "produk", href: "/product" },
    { name: "unduh", href: "/download" },
    { name: "pembelian", href: "/purchasing" },
    { name: "lokasi", href: "/locations" },
  ]

  return (
    <>
      {/* Main header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <img src="/images/logo-cbs.png" alt="CBS Logo" className="h-12 w-auto" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-gray-900 font-bold text-xl">PT. CAKRA BAHANA SAKTI</div>
                  <div className="text-gray-500 text-sm">Solusi Industri</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg"
                >
                  {t(item.name)}
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-8">
                {/* Search Icon */}
                <button
                  aria-label="Cari"
                  className="focus:outline-none"
                  onClick={() => {
                    setShowSearch((v) => !v)
                    setTimeout(() => searchInputRef.current?.focus(), 100)
                  }}
                  title="Cari"
                >
                  <Search className="h-5 w-5 text-gray-500 hover:text-blue-600 transition-colors" />
                </button>
                {/* Language Icon */}
                <div className="relative">
                  <button
                    aria-label="Ganti Bahasa"
                    className="focus:outline-none"
                    onClick={() => setShowLang((v) => !v)}
                    title="Ganti Bahasa"
                  >
                    <Globe className="h-5 w-5 text-gray-500 hover:text-blue-600 transition-colors" />
                  </button>
                  {showLang && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                      <button className="block w-full text-left px-4 py-2 hover:bg-blue-50" onClick={() => { i18n.changeLanguage('id'); setShowLang(false); }}>
                        Bahasa Indonesia
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-blue-50" onClick={() => { i18n.changeLanguage('en'); setShowLang(false); }}>
                        English
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile menu button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden hover:bg-gray-100 rounded-full">
                    <Menu className="h-6 w-6 text-gray-700" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col space-y-2 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(item.name)}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Search Input Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-start justify-center pt-24" onClick={() => setShowSearch(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto relative" onClick={e => e.stopPropagation()}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Cari produk, layanan, atau artikel..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={() => setShowSearch(false)} aria-label="Tutup">
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
