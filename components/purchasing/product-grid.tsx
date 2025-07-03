"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Heart, Eye, Star, Grid, List } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function ProductGrid() {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("default")

  const products = [
    {
      id: 1,
      name: "SINGLE ARM TEE CONNECTOR",
      model: "CBS-SAT-001",
      price: 10000000,
      originalPrice: 12000000,
      image: "/images/cbs-3.png",
      rating: 4.8,
      reviews: 24,
      inStock: true,
      category: "Tee Connectors",
      brand: "CBS Premium",
      discount: 17,
      description: "Single arm tee connector for branching conductors at 90° angles with secure mounting base",
    },
    {
      id: 2,
      name: "DUPLEX CONNECTOR SYSTEM",
      model: "CBS-DCS-002",
      price: 15000000,
      image: "/images/cbs-2.png",
      rating: 4.6,
      reviews: 18,
      inStock: true,
      category: "Duplex Systems",
      brand: "CBS Premium",
      description: "Dual conductor clamps for parallel conductor applications with circular mounting base",
    },
    {
      id: 3,
      name: "TEE CONNECTOR STANDARD",
      model: "CBS-TCS-003",
      price: 8500000,
      image: "/images/cbs-4.png",
      rating: 4.7,
      reviews: 31,
      inStock: true,
      category: "Tee Connectors",
      brand: "CBS Premium",
      description: "Standard tee connection for joining three conductors in substation applications",
    },
    {
      id: 4,
      name: "SLIDING CONNECTOR FOR ALUMINUM TUBE",
      model: "CBS-SCA-004",
      price: 12000000,
      image: "/images/cbs-6.png",
      rating: 4.9,
      reviews: 42,
      inStock: true,
      category: "Sliding Connectors",
      brand: "Industrial Pro",
      featured: true,
      description: "Sliding connector for aluminum tube applications with adjustable positioning",
    },
    {
      id: 5,
      name: "COMPLEX CONNECTOR SYSTEM",
      model: "CBS-CCS-005",
      price: 18000000,
      image: "/images/cbs-5.png",
      rating: 4.5,
      reviews: 15,
      inStock: true,
      category: "Complex Systems",
      brand: "FlexiJoint",
      description: "Advanced connector system with multiple clamp points for complex conductor arrangements",
    },
    {
      id: 6,
      name: "CURVED CONDUCTOR CONNECTOR",
      model: "CBS-CCC-006",
      price: 14000000,
      image: "/images/cbs-8.png",
      rating: 4.4,
      reviews: 12,
      inStock: false,
      category: "Curved Connectors",
      brand: "FlexiJoint",
      description: "Specialized connector for curved conductor paths with flexible connection points",
    },
    {
      id: 7,
      name: "SINGLE CONDUCTOR CLAMP",
      model: "CBS-SCC-007",
      price: 6500000,
      image: "/images/cbs-7.png",
      rating: 4.6,
      reviews: 28,
      inStock: true,
      category: "Support Connectors",
      brand: "TechConnect",
      description: "Single conductor clamp with circular mounting base for secure conductor support",
    },
    {
      id: 8,
      name: "PREMIUM ALUMINUM CONNECTOR SET",
      model: "CBS-PAC-008",
      price: 25000000,
      image: "/images/connector-photo.png",
      rating: 4.8,
      reviews: 35,
      inStock: true,
      category: "Premium Sets",
      brand: "CBS Premium",
      featured: true,
      description: "High-quality aluminum connector set meeting ANSI C119.4-2011 standards",
    },
  ]

  const addToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`)
    // Add to cart logic here
  }

  const toggleWishlist = (productId: number) => {
    console.log(`Toggled wishlist for product ${productId}`)
    // Wishlist logic here
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{t('konektor_industri')}</h2>
          <p className="text-gray-600">{t('menampilkan_semua_hasil', { count: products.length })}</p>
        </div>

        <div className="flex items-center gap-4">
          {/* View Mode Toggle */}
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder={t('urutkan_berdasarkan')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">{t('urut_default')}</SelectItem>
              <SelectItem value="price-low">{t('harga_terendah')}</SelectItem>
              <SelectItem value="price-high">{t('harga_tertinggi')}</SelectItem>
              <SelectItem value="rating">{t('paling_dinilai')}</SelectItem>
              <SelectItem value="newest">{t('terbaru')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            {viewMode === "grid" ? (
              <>
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.discount && <Badge className="bg-red-500 text-white">-{product.discount}%</Badge>}
                    {product.featured && <Badge className="bg-blue-500 text-white">{t('unggulan')}</Badge>}
                    {!product.inStock && <Badge variant="secondary">{t('stok_habis')}</Badge>}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="text-sm text-blue-600 font-medium mb-1">{t(product.category)}</div>
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{t(product.name)}</h3>
                  <div className="text-sm text-gray-500 mb-2">{t('model')}: {product.model}</div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} {t('ulasan')})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">Rp{product.price.toLocaleString("id-ID")}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        Rp{product.originalPrice.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full" onClick={() => addToCart(product.id)} disabled={!product.inStock}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? t('tambah_ke_keranjang') : t('stok_habis')}
                  </Button>
                </CardContent>
              </>
            ) : (
              /* List View */
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm text-blue-600 font-medium">{t(product.category)}</div>
                        <h3 className="font-bold text-gray-900 mb-1">{t(product.name)}</h3>
                        <div className="text-sm text-gray-500 mb-2">{t('model')}: {product.model}</div>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-sm text-gray-500">({product.reviews} {t('ulasan')})</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900">Rp{product.price.toLocaleString("id-ID")}</div>
                        <Button className="mt-2" onClick={() => addToCart(product.id)} disabled={!product.inStock}>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {product.inStock ? t('tambah_ke_keranjang') : t('stok_habis')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
