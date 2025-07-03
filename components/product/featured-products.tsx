import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Download, Eye } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function FeaturedProductsSection() {
  const { t } = useTranslation();
  const products = [
    {
      id: "CBS-SAT-001",
      name: t('single_arm_tee_connector'),
      category: t('tee_connectors'),
      image: "/images/cbs-3.png",
      rating: 4.9,
      reviews: 127,
      price: t('contact_for_quote'),
      features: [t('ansi_c1194_compliant'), t('aluminum_construction'), t('secure_mounting')],
      badge: t('best_seller'),
      badgeColor: "bg-green-500",
    },
    {
      id: "CBS-DCS-002",
      name: t('duplex_connector_system'),
      category: t('duplex_systems'),
      image: "/images/cbs-2.png",
      rating: 4.8,
      reviews: 89,
      price: t('contact_for_quote'),
      features: [t('dual_conductor'), t('circular_base'), t('high_strength')],
      badge: t('new_release'),
      badgeColor: "bg-blue-500",
    },
    {
      id: "CBS-PAC-008",
      name: t('premium_aluminum_connector_set'),
      category: t('premium_sets'),
      image: "/images/connector-photo.png",
      rating: 4.7,
      reviews: 156,
      price: t('contact_for_quote'),
      features: [t('ansi_certified'), t('complete_set'), t('professional_grade')],
      badge: t('popular'),
      badgeColor: "bg-orange-500",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('produk_unggulan')}</h2>
            <p className="text-xl text-gray-600">{t('desc_produk_unggulan_lengkap')}</p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            {t('lihat_semua_produk')}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white`}>{product.badge}</Badge>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-orange-600 font-medium mb-2">{product.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="text-sm text-gray-500 mb-3">{t('model')}: {product.id}</div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} {t('reviews')})</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900">{product.price}</div>
                  <Button className="bg-orange-500 hover:bg-orange-600">{t('dapatkan_penawaran')}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
