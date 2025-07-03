"use client";
import { useTranslation } from "react-i18next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function LocationsHero() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/980d3dfeeda404c6458796481bb8bf69.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-700 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            {t('kunjungi_kantor_kami')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            {t('temukan_kami_di')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 drop-shadow-lg">
              {t('yogyakarta')}
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            {t('desc_lokasi_hero')}
          </p>
        </div>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-800 border border-blue-600 rounded-2xl p-6">
              <Phone className="h-8 w-8 text-blue-300 mx-auto mb-3" />
              <div className="text-lg font-bold text-white">(0274) 2887324</div>
              <div className="text-blue-300 text-sm">Telepon</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-800 border border-blue-600 rounded-2xl p-6">
              <Mail className="h-8 w-8 text-blue-300 mx-auto mb-3" />
              <div className="text-lg font-bold text-white">Email</div>
              <div className="text-blue-300 text-sm">cakrabahanasakti@gmail.com</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-800 border border-blue-600 rounded-2xl p-6">
              <Clock className="h-8 w-8 text-blue-300 mx-auto mb-3" />
              <div className="text-lg font-bold text-white">Senin-Jumat</div>
              <div className="text-blue-300 text-sm">08.00 - 17.00 WIB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
