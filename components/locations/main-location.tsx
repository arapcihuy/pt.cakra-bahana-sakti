"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, MessageSquare, Mail, Navigation, Clock } from "lucide-react"
import { useTranslation } from "react-i18next"

export function MainLocationSection() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('lokasi_kami')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('desc_lokasi_kami')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="relative h-96 bg-gray-100">
                {/* Map Placeholder with embedded map styling */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">{t('interactive_map')}</p>
                      <p className="text-sm text-gray-500">{t('yogyakarta_indonesia')}</p>
                    </div>
                  </div>
                  {/* Simulated map marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  {/* Map controls */}
                  <div className="absolute top-4 left-4 bg-white rounded shadow-md">
                    <button className="p-2 text-gray-600 hover:text-gray-900">+</button>
                  </div>
                  <div className="absolute top-12 left-4 bg-white rounded shadow-md">
                    <button className="p-2 text-gray-600 hover:text-gray-900">-</button>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  {t('zoom_map_hint')}
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-gray-600 bg-white px-2 py-1 rounded">
                  {t('openstreetmap_copyright')}
                </div>
              </div>
            </Card>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('cakra_bahana_sakti')}</h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('address')}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {t('alamat_yogyakarta')}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('telephone')}</h4>
                      <p className="text-gray-600">(0274) 2887324</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('whatsapp')}</h4>
                      <p className="text-gray-600">081225716870</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('email')}</h4>
                      <p className="text-gray-600">cakrabahanasakti@gmail.com</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('business_hours')}</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>{t('monday_friday')}: 8:00 AM - 5:00 PM</p>
                        <p>{t('saturday')}: 8:00 AM - 2:00 PM</p>
                        <p>{t('sunday')}: {t('closed')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Navigation className="h-4 w-4 mr-2" />
                    {t('get_directions')}
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Phone className="h-4 w-4 mr-2" />
                    {t('call_now')}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-green-600 text-white hover:bg-green-700 border-green-600"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
