"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ProductHero() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            {t('produk_hero_judul')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              {t('produk_hero_industri')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('produk_hero_desc')}
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-6 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder={t('cari_produk_placeholder')}
                  className="pl-12 h-12 border-gray-200 text-gray-900"
                />
              </div>
              <div className="md:col-span-3">
                <select className="w-full h-12 px-4 border border-gray-200 rounded-lg text-gray-900 bg-white">
                  <option>{t('semua_kategori')}</option>
                  <option>{t('peralatan_manufaktur')}</option>
                  <option>{t('mesin_proses')}</option>
                  <option>{t('sistem_otomasi')}</option>
                  <option>{t('kontrol_kualitas')}</option>
                </select>
              </div>
              <div className="md:col-span-3 flex gap-2">
                <Button className="flex-1 h-12 bg-orange-500 hover:bg-orange-600">
                  <Filter className="h-4 w-4 mr-2" />
                  {t('filter')}
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
