import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cog, Wrench, Shield, Truck, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ServicesSection() {
  const { t } = useTranslation();
  const services = [
    {
      icon: Cog,
      title: t('aksesoris_gardu_induk'),
      description: t('desc_aksesoris_gardu_induk'),
      features: [t('konektor_tee'), t('sistem_penyangga'), t('konektor_geser')],
      image: "/images/cbs-3.png",
    },
    {
      icon: Wrench,
      title: t('solusi_rekayasa'),
      description: t('desc_solusi_rekayasa'),
      features: [t('desain_khusus'), t('integrasi_sistem'), t('konsultasi_teknis')],
      image: "/images/cbs-2.png",
    },
    {
      icon: Shield,
      title: t('jaminan_kualitas'),
      description: t('desc_jaminan_kualitas'),
      features: [t('sesuai_ansi'), t('pengujian_kualitas'), t('dukungan_teknis')],
      image: "/images/cbs-4.png",
    },
    {
      icon: Truck,
      title: t('pengadaan_logistik'),
      description: t('desc_pengadaan_logistik'),
      features: [t('pasokan_global'), t('manajemen_stok'), t('pengiriman_cepat')],
      image: "/images/cbs-6.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('layanan_kami')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('layanan_kami_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </div>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-16 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                  asChild
                >
                  <a href="/product">
                    {t('selengkapnya')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Manufacturing Showcase */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">{t('fasilitas_manufaktur_modern')}</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {t('fasilitas_manufaktur_desc')}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3" />
                    {t('pabrik_10000_sqft')}
                  </li>
                  <li className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3" />
                    {t('laboratorium_pengujian')}
                  </li>
                  <li className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3" />
                    {t('kepatuhan_ansi')}
                  </li>
                </ul>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  {t('tur_fasilitas_kami')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/images/factory-floor.jpg"
                  alt="CBS Manufacturing Facility"
                  className="rounded-xl shadow-2xl w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
