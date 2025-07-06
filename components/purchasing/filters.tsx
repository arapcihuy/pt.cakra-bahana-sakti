"use client"

import { useState, createContext, useContext } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, X } from "lucide-react"
import { useTranslation } from 'react-i18next'

export const ProductPurchaseFilterContext = createContext({
  search: "",
  setSearch: (s: string) => {},
  priceRange: [0, 50000000],
  setPriceRange: (r: [number, number]) => {},
  selectedCategories: [],
  setSelectedCategories: (c: string[]) => {},
  selectedBrands: [],
  setSelectedBrands: (b: string[]) => {},
});

export function ProductPurchaseFilterProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  return (
    <ProductPurchaseFilterContext.Provider value={{ search, setSearch, priceRange, setPriceRange, selectedCategories, setSelectedCategories, selectedBrands, setSelectedBrands }}>
      {children}
    </ProductPurchaseFilterContext.Provider>
  );
}

export function ProductFilters() {
  const { t } = useTranslation();
  const { search, setSearch, priceRange, setPriceRange, selectedCategories, setSelectedCategories, selectedBrands, setSelectedBrands } = useContext(ProductPurchaseFilterContext);

  const categories = [
    t('support_connectors'),
    t('sliding_connectors'),
    t('tee_connectors'),
    t('straight_connectors'),
    t('angle_connectors'),
    t('bus_support_systems'),
  ]

  const brands = [t('cbs_premium'), t('industrial_pro'), t('techconnect'), t('flexijoint'), t('stronglink')]

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, 50000000])
    setSearch("")
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Search className="h-5 w-5 mr-2" />
            {t('search_products')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder={t('search_by_name_or_model')} value={search} onChange={e => setSearch(e.target.value)} />
        </CardContent>
      </Card>

      {/* Active Filters */}
      {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-1" />
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map((category) => (
                <div
                  key={category}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {category}
                  <button onClick={() => handleCategoryChange(category, false)} className="ml-2 hover:text-blue-900">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              {selectedBrands.map((brand) => (
                <div
                  key={brand}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {brand}
                  <button onClick={() => handleBrandChange(brand, false)} className="ml-2 hover:text-green-900">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t('categories')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                />
                <label htmlFor={category} className="text-sm text-gray-700 cursor-pointer">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t('price_range')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={50000000} step={1000000} className="w-full" />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Rp{priceRange[0].toLocaleString("id-ID")}</span>
              <span>Rp{priceRange[1].toLocaleString("id-ID")}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t('brands')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                />
                <label htmlFor={brand} className="text-sm text-gray-700 cursor-pointer">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
