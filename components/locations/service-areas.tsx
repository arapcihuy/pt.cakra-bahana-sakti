import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Wrench, Clock } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ServiceAreasSection() {
  const { t } = useTranslation();
  const serviceAreas = [
    {
      region: t('indonesia'),
      cities: [t('jakarta'), t('surabaya'), t('bandung'), t('medan'), t('semarang'), t('makassar')],
      coverage: t('seluruh_indonesia'),
      technicians: 250,
      responseTime: t('response_time_4_8'),
      services: [t('instalasi'), t('pemeliharaan'), t('perbaikan_darurat'), t('pelatihan')],
      color: "from-red-500 to-red-600",
    },
    {
      region: t('thailand'),
      cities: [t('bangkok'), t('chiang_mai'), t('phuket'), t('pattaya')],
      coverage: t('kota_besar'),
      technicians: 45,
      responseTime: t('response_time_6_12'),
      services: [t('instalasi'), t('pemeliharaan'), t('dukungan')],
      color: "from-blue-500 to-blue-600",
    },
    {
      region: t('malaysia'),
      cities: [t('kuala_lumpur'), t('johor_bahru'), t('penang'), t('kuching')],
      coverage: t('semenanjung_malaysia_timur'),
      technicians: 35,
      responseTime: t('response_time_8_24'),
      services: [t('instalasi'), t('pemeliharaan'), t('dukungan')],
      color: "from-green-500 to-green-600",
    },
    {
      region: t('singapore'),
      cities: [t('singapore')],
      coverage: t('seluruh_pulau'),
      technicians: 20,
      responseTime: t('response_time_2_4'),
      services: [t('instalasi'), t('pemeliharaan'), t('perbaikan_darurat')],
      color: "from-purple-500 to-purple-600",
    },
    {
      region: t('philippines'),
      cities: [t('manila'), t('cebu'), t('davao')],
      coverage: t('pulau_utama'),
      technicians: 30,
      responseTime: t('response_time_8_24'),
      services: [t('instalasi'), t('dukungan')],
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('area_layanan')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('desc_area_layanan')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{area.region}</h3>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                    {area.coverage}
                  </Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm mb-1">{t('kota_layanan')}</div>
                      <div className="flex flex-wrap gap-1">
                        {area.cities.map((city, cityIndex) => (
                          <Badge key={cityIndex} variant="outline" className="text-xs">
                            {city}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{area.technicians}</div>
                        <div className="text-xs text-gray-500">{t('teknisi')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{area.responseTime}</div>
                        <div className="text-xs text-gray-500">{t('waktu_respons')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Wrench className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm mb-1">{t('layanan_tersedia')}</div>
                      <div className="flex flex-wrap gap-1">
                        {area.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
