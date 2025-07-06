"use client"
import '@/lib/i18n';
import { useTranslation } from 'react-i18next';

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Grid, List, Download, Mail } from "lucide-react"
import { useState, createContext, useContext } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Context untuk filter produk
export const ProductFilterContext = createContext({
  kategori: "Semua Kategori",
  setKategori: (kat: string) => {},
  keyword: "",
  setKeyword: (kw: string) => {},
  viewMode: "grid",
  setViewMode: (mode: "grid" | "list") => {},
});

export function ProductCatalogProvider({ children }: { children: React.ReactNode }) {
  const [kategori, setKategori] = useState("Semua Kategori");
  const [keyword, setKeyword] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  return (
    <ProductFilterContext.Provider value={{ kategori, setKategori, keyword, setKeyword, viewMode, setViewMode }}>
      {children}
    </ProductFilterContext.Provider>
  );
}

export function ProductCatalogSection() {
  const { t } = useTranslation();
  const [openDetail, setOpenDetail] = useState<number | null>(null)
  // Ambil filter dari context
  const { kategori, setKategori, keyword, setKeyword, viewMode, setViewMode } = useContext(ProductFilterContext);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Daftar kategori (bisa diambil dari catalogItems jika dinamis)
  const kategoriList = [
    "Semua Kategori",
    t('cnc_machines'),
    t('automation_systems'),
    t('process_equipment'),
    t('safety_systems'),
    t('power_equipment'),
    t('maintenance_tools'),
  ];

  const catalogItems = [
    {
      category: t('cnc_machines'),
      itemCount: 45,
      description: t('desc_cnc_machines'),
      lastUpdated: "Dec 2024",
      size: "12.5 MB",
    },
    {
      category: t('automation_systems'),
      itemCount: 32,
      description: t('desc_automation_systems'),
      lastUpdated: "Nov 2024",
      size: "8.7 MB",
    },
    {
      category: t('process_equipment'),
      itemCount: 28,
      description: t('desc_process_equipment'),
      lastUpdated: "Dec 2024",
      size: "15.2 MB",
    },
    {
      category: t('safety_systems'),
      itemCount: 19,
      description: t('desc_safety_systems'),
      lastUpdated: "Oct 2024",
      size: "6.3 MB",
    },
    {
      category: t('power_equipment'),
      itemCount: 24,
      description: t('desc_power_equipment'),
      lastUpdated: "Nov 2024",
      size: "9.8 MB",
    },
    {
      category: t('maintenance_tools'),
      itemCount: 36,
      description: t('desc_maintenance_tools'),
      lastUpdated: "Dec 2024",
      size: "7.4 MB",
    },
  ]

  const productDetails = [
    {
      name: t('single_arm_tee_connector'),
      image: "/images/cbs-3.png",
      description: t('desc_single_arm_tee_connector'),
      spec: t('spec_single_arm_tee_connector')
    },
    {
      name: t('fixed_support_connector'),
      image: "/images/cbs-2.png",
      description: t('desc_fixed_support_connector'),
      spec: t('spec_fixed_support_connector')
    },
    {
      name: t('bus_support_bolted_type'),
      image: "/images/cbs-4.png",
      description: t('desc_bus_support_bolted_type'),
      spec: t('spec_bus_support_bolted_type')
    },
    {
      name: t('support_konektor_angle'),
      image: "/images/cbs-6.png",
      description: t('desc_support_konektor_angle'),
      spec: t('spec_support_konektor_angle')
    },
    {
      name: t('sliding_connector'),
      image: "/images/cbs-5.png",
      description: t('desc_sliding_connector'),
      spec: t('spec_sliding_connector')
    },
    {
      name: t('straight_connector_bolted_type'),
      image: "/images/cbs-8.png",
      description: t('desc_straight_connector_bolted_type'),
      spec: t('spec_straight_connector_bolted_type')
    },
  ]

  // Filter catalogItems berdasarkan keyword dan kategori
  const filteredCatalog = catalogItems.filter((item) => {
    const cocokKategori = kategori === "Semua Kategori" || item.category === kategori;
    const cocokKeyword =
      item.category.toLowerCase().includes(keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(keyword.toLowerCase());
    return cocokKategori && cocokKeyword;
  });

  return (
    <section id="product-catalog-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('katalog_produk')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('deskripsi_katalog_produk')}
          </p>
        </div>

        {/* Product Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('rangkaian_produk_kami')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {productDetails.map((product, idx) => (
              <div key={idx} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src={product.image} alt={product.name} className="w-16 h-16 mx-auto mb-2 object-contain" />
                <div className="text-xs text-gray-600 mb-2">{product.name}</div>
                <Button size="sm" className="bg-orange-500 text-white mt-2" onClick={() => setOpenDetail(idx)}>
                  {t('selengkapnya')}
                </Button>
              </div>
            ))}
          </div>
          <Dialog open={openDetail !== null} onOpenChange={() => setOpenDetail(null)}>
            {openDetail !== null && (
              <DialogContent>
                <img src={productDetails[openDetail].image} alt={productDetails[openDetail].name} className="w-32 h-32 mx-auto mb-4 object-contain" />
                <h3 className="text-lg font-bold mb-2">{productDetails[openDetail].name}</h3>
                <p className="text-gray-700 mb-2">{productDetails[openDetail].description}</p>
                <div className="text-sm text-gray-500">{productDetails[openDetail].spec}</div>
                <Button className="mt-4 w-full" onClick={() => setOpenDetail(null)}>{t('tutup')}</Button>
              </DialogContent>
            )}
          </Dialog>
        </div>

        {/* Catalog Controls */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder={t('cari_katalog')}
                  className="pl-10 bg-white"
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select
                className="w-48 h-12 px-4 border border-gray-200 rounded-lg text-gray-900 bg-white"
                value={kategori}
                onChange={e => setKategori(e.target.value)}
              >
                {kategoriList.map((kat, idx) => (
                  <option key={idx} value={kat}>{kat}</option>
                ))}
              </select>
              <Button variant="outline" size="sm" onClick={() => setIsFilterOpen(true)}>
                <Filter className="h-4 w-4 mr-2" />
                {t('filter')}
              </Button>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className={viewMode === "grid" ? "bg-orange-500 text-white hover:bg-orange-600" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  className={viewMode === "list" ? "bg-orange-500 text-white hover:bg-orange-600" : ""}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Filter Lanjutan */}
        <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <DialogContent>
            <h3 className="text-lg font-bold mb-4">Filter Lanjutan</h3>
            <div className="mb-4">
              <label className="block mb-1">Harga Minimum</label>
              <input type="number" className="border rounded p-2 w-full" placeholder="Rp 0" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Harga Maksimum</label>
              <input type="number" className="border rounded p-2 w-full" placeholder="Rp 10.000.000" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Spesifikasi</label>
              <input type="text" className="border rounded p-2 w-full" placeholder="Contoh: IP65, 500A, dll" />
            </div>
            <Button className="w-full" onClick={() => setIsFilterOpen(false)}>{t('tutup')}</Button>
          </DialogContent>
        </Dialog>

        {/* Catalog Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCatalog.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {item.category}
                    </h3>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {item.itemCount} {t('produk')}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{t('terakhir_diperbarui')}:</span>
                      <span className="font-medium text-gray-900">{item.lastUpdated}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{t('ukuran_file')}:</span>
                      <span className="font-medium text-gray-900">{item.size}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
                      <Download className="h-4 w-4 mr-2" />
                      {t('unduh')}
                    </Button>
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {filteredCatalog.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 flex flex-row items-center p-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {item.category}
                  </h3>
                  <p className="text-gray-600 mb-2 leading-relaxed">{item.description}</p>
                  <div className="flex gap-4 text-sm mb-2">
                    <span className="text-gray-500">{t('terakhir_diperbarui')}: <span className="font-medium text-gray-900">{item.lastUpdated}</span></span>
                    <span className="text-gray-500">{t('ukuran_file')}: <span className="font-medium text-gray-900">{item.size}</span></span>
                  </div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-2">
                    {item.itemCount} {t('produk')}
                  </Badge>
                </div>
                <div className="flex flex-col gap-2 ml-4">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Download className="h-4 w-4 mr-2" />
                    {t('unduh')}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{t('butuh_solusi_khusus')}</h3>
          <p className="text-xl mb-8 text-orange-100">
            {t('deskripsi_tim_engineering')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <a href="mailto:cakrabahanasakti@gmail.com?subject=Minta Penawaran Khusus&body=Halo, saya ingin minta penawaran khusus untuk produk" target="_blank" rel="noopener noreferrer">
                {t('minta_penawaran_khusus')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              asChild
            >
              <a href="https://wa.me/6281225716870?text=Halo,%20saya%20ingin%20jadwalkan%20konsultasi%20produk" target="_blank" rel="noopener noreferrer">
                {t('jadwalkan_konsultasi')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
