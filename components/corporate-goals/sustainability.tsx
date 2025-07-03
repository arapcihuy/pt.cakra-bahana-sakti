import { useTranslation } from 'react-i18next'

export function SustainabilitySection() {
  const { t } = useTranslation()

  const initiatives = [
    {
      title: "Netral Karbon",
      description: "Emisi nol bersih pada tahun 2030",
      stats: "50%",
      label: "target pengurangan",
    },
    {
      title: "Ekonomi Sirkular",
      description: "Implementasi praktik berkelanjutan",
      stats: "75%",
      label: "pengurangan limbah",
    },
    {
      title: "Energi Terbarukan",
      description: "Transisi ke energi bersih",
      stats: "60%",
      label: "penggunaan terbarukan",
    },
    {
      title: "Konservasi Air",
      description: "Sistem manajemen canggih",
      stats: "40%",
      label: "pengurangan penggunaan",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-8">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              {t('sustainability')}
              <span className="block text-amber-500">{t('commitment')}</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Kepedulian lingkungan adalah inti dari strategi bisnis kami. Kami berkomitmen menciptakan masa depan berkelanjutan melalui praktik inovatif.
            </p>

            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-amber-400">{t('sdg_pbb')}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800 px-3 py-2 rounded text-sm">{t('sdg7')}</div>
                <div className="bg-slate-800 px-3 py-2 rounded text-sm">{t('sdg9')}</div>
                <div className="bg-slate-800 px-3 py-2 rounded text-sm">{t('sdg12')}</div>
                <div className="bg-slate-800 px-3 py-2 rounded text-sm">{t('sdg13')}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="group">
                <div className="bg-slate-50 border-2 border-transparent hover:border-amber-500 p-6 rounded-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{initiative.title}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-black text-amber-500">{initiative.stats}</div>
                      <div className="text-xs text-slate-500 uppercase">{initiative.label}</div>
                    </div>
                  </div>
                  <p className="text-slate-600">{initiative.description}</p>

                  <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-1000 group-hover:from-amber-500 group-hover:to-orange-500"
                      style={{ width: `${Number.parseInt(initiative.stats)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
