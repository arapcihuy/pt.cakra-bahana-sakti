"use client";

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductHero } from "@/components/product/hero"
import { ProductCategoriesSection } from "@/components/product/categories"
import { FeaturedProductsSection } from "@/components/product/featured-products"
import { IndustriesSection } from "@/components/product/industries"
import { TechnicalSpecsSection } from "@/components/product/technical-specs"
import { ProductCatalogSection } from "@/components/product/catalog"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProductHero />
        <ProductCategoriesSection />
        <FeaturedProductsSection />
        <IndustriesSection />
        <TechnicalSpecsSection />
        <ProductCatalogSection />
      </main>
      <Footer />
    </div>
  )
}
