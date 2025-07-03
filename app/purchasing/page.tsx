"use client";

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PurchasingHero } from "@/components/purchasing/hero"
import { ProductFilters } from "@/components/purchasing/filters"
import { ProductGrid } from "@/components/purchasing/product-grid"
import { CartSidebar } from "@/components/purchasing/cart-sidebar"

export default function PurchasingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <PurchasingHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProductFilters />
            </div>
            <div className="lg:col-span-3">
              <ProductGrid />
            </div>
          </div>
        </div>
      </main>
      <CartSidebar />
      <Footer />
    </div>
  )
}
