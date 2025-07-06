import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cog, Cpu, Gauge, Shield, Wrench, Zap } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { useContext } from "react"
import { ProductFilterContext } from "./catalog"

export function ProductCategoriesSection() {
  const { t } = useTranslation();
  const { setKategori } = useContext(ProductFilterContext);

  // Fungsi untuk scroll ke katalog
  const scrollToCatalog = () => {
    const el = document.getElementById("product-catalog-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const categories = [
    {
      icon: Cog,
      title: t('kategori_konektor_tee'),
      description: t('desc_konektor_tee'),
      productCount: t('produk_15plus'),
      color: "from-blue-500 to-blue-600",
      image: "/images/cbs-3.png",
    },
    {
      icon: Cpu,
      title: t('kategori_sistem_duplex'),
      description: t('desc_sistem_duplex'),
      productCount: t('produk_12plus'),
      color: "from-green-500 to-green-600",
      image: "/images/cbs-2.png",
    },
    {
      icon: Gauge,
      title: t('kategori_konektor_geser'),
      description: t('desc_konektor_geser'),
      productCount: t('produk_8plus'),
      color: "from-purple-500 to-purple-600",
      image: "/images/cbs-6.png",
    },
    {
      icon: Shield,
      title: t('kategori_konektor_penyangga'),
      description: t('desc_konektor_penyangga'),
      productCount: t('produk_10plus'),
      color: "from-red-500 to-red-600",
      image: "/images/cbs-7.png",
    },
    {
      icon: Wrench,
      title: t('kategori_sistem_kompleks'),
      description: t('desc_sistem_kompleks'),
      productCount: t('produk_6plus'),
      color: "from-orange-500 to-orange-600",
      image: "/images/cbs-5.png",
    },
    {
      icon: Zap,
      title: t('kategori_set_premium'),
      description: t('desc_set_premium'),
      productCount: t('produk_5plus'),
      color: "from-yellow-500 to-yellow-600",
      image: "/images/connector-photo.png",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('kategori_produk')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('desc_kategori_produk')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-16 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">{category.productCount}</span>
                  <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0" onClick={() => { setKategori(category.title); scrollToCatalog(); }}>
                    {t('lihat_produk')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
