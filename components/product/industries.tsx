import { Card, CardContent } from "@/components/ui/card"
import { Factory, Truck, Zap, Droplets, Wheat, Building } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function IndustriesSection() {
  const { t } = useTranslation();
  const industries = [
    {
      icon: Factory,
      name: t('industri_manufaktur'),
      description: t('desc_industri_manufaktur'),
      applications: [t('lini_perakitan'), t('kontrol_kualitas'), t('penanganan_material')],
    },
    {
      icon: Zap,
      name: t('industri_energi_listrik'),
      description: t('desc_industri_energi_listrik'),
      applications: [t('pembangkit_listrik'), t('plts'), t('infrastruktur_jaringan')],
    },
    {
      icon: Droplets,
      name: t('industri_minyak_gas'),
      description: t('desc_industri_minyak_gas'),
      applications: [t('peralatan_pengeboran'), t('sistem_kilang'), t('infrastruktur_pipa')],
    },
    {
      icon: Wheat,
      name: t('industri_makanan_minuman'),
      description: t('desc_industri_makanan_minuman'),
      applications: [t('lini_proses'), t('sistem_pengemasan'), t('pengujian_kualitas')],
    },
    {
      icon: Building,
      name: t('industri_konstruksi'),
      description: t('desc_industri_konstruksi'),
      applications: [t('ekskavasi'), t('proses_material'), t('persiapan_lahan')],
    },
    {
      icon: Truck,
      name: t('industri_logistik'),
      description: t('desc_industri_logistik'),
      applications: [t('sistem_konveyor'), t('peralatan_sortir'), t('solusi_penyimpanan')],
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('industri_yang_kami_layani')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('desc_industri_yang_kami_layani')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 p-3 rounded-lg mr-4">
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-orange-400 mb-3">{t('aplikasi_utama')}</h4>
                  <div className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        {app}
                      </div>
                    ))}
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
