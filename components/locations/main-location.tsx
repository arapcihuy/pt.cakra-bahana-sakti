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
              <div style={{ borderRadius: 16, overflow: 'hidden', height: 400 }}>
                <iframe
                  src="https://www.google.com/maps?q=Jl+Sambisari,+Duwet,+Sendangadi,+Mlati,+Sleman,+Yogyakarta+55511&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Cakra Bahana Sakti"
                ></iframe>
              </div>
            </Card>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">PT. CAKRA BAHANA SAKTI</h3>

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
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jl+Sambisari,+Duwet,+Sendangadi,+Mlati,+Kb.+Arung,+Tridadi,+Sleman,+Sleman+Regency,+Daerah+Istimewa+Yogyakarta+55511"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2 flex-1 bg-blue-600 hover:bg-blue-700 text-primary-foreground"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    {t('get_directions')}
                  </a>
                  <a
                    href="tel:02742887324"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1 bg-transparent"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {t('call_now')}
                  </a>
                  <a
                    href="https://wa.me/6281225716870"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border hover:text-accent-foreground h-10 px-4 py-2 flex-1 bg-green-600 text-white hover:bg-green-700 border-green-600"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
