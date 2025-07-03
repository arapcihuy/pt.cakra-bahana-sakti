import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MessageSquare, Car, Bus, Plane, Clock, MapPin } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ContactInfoSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('hubungi_kami')}</h2>
            <p className="text-gray-600 mb-8">
              {t('hubungi_kami_desc')}
            </p>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{t('kirim_pesan')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('nama')}</label>
                      <Input placeholder={t('nama_lengkap_anda')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('telepon')}</label>
                      <Input placeholder={t('nomor_telepon_anda')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
                    <Input type="email" placeholder={t('email_anda_placeholder')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('subjek')}</label>
                    <Input placeholder={t('subjek_placeholder')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('pesan')}</label>
                    <Textarea placeholder={t('pesan_placeholder')} rows={5} />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    {t('kirim_pesan')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* How to Find Us */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{t('cara_menemukan_kami')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">{t('dengan_mobil')}</div>
                      <div className="text-sm text-gray-600">{t('desc_dengan_mobil')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">{t('transportasi_umum')}</div>
                      <div className="text-sm text-gray-600">{t('desc_transportasi_umum')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">{t('dari_bandara')}</div>
                      <div className="text-sm text-gray-600">{t('desc_dari_bandara')}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Area */}
            <Card className="border-0 shadow-lg bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{t('service_coverage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('service_coverage_desc')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{t('yogyakarta')}</Badge>
                  <Badge variant="secondary">{t('semarang')}</Badge>
                  <Badge variant="secondary">{t('solo')}</Badge>
                  <Badge variant="secondary">{t('magelang')}</Badge>
                  <Badge variant="secondary">{t('klaten')}</Badge>
                  <Badge variant="secondary">{t('bantul')}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
