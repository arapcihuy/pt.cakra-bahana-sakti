import { ShoppingCart, Package, Truck, Shield } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function PurchasingHero() {
  const { t } = useTranslation();
  return (
    <section className="bg-white border-b border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('toko_peralatan_industri')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('desc_toko_peralatan_industri')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
            <Package className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <div className="font-semibold text-gray-900">{t('produk_500plus')}</div>
              <div className="text-sm text-gray-600">{t('tersedia')}</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg">
            <Truck className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <div className="font-semibold text-gray-900">{t('pengiriman_cepat')}</div>
              <div className="text-sm text-gray-600">{t('hari_kerja_2_5')}</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 bg-purple-50 rounded-lg">
            <Shield className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <div className="font-semibold text-gray-900">{t('garansi')}</div>
              <div className="text-sm text-gray-600">{t('tahun_1_3')}</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 bg-orange-50 rounded-lg">
            <ShoppingCart className="h-8 w-8 text-orange-600 mr-3" />
            <div>
              <div className="font-semibold text-gray-900">{t('pembayaran_aman')}</div>
              <div className="text-sm text-gray-600">{t('banyak_opsi')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
