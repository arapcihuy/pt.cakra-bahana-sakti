"use client";
import { useTranslation } from "react-i18next"

export function CoreValuesSection() {
  const { t } = useTranslation();
  const values = [
    { title: t('integritas'), description: t('desc_integritas') },
    { title: t('kolaborasi'), description: t('desc_kolaborasi') },
    { title: t('inovasi'), description: t('desc_inovasi') },
    { title: t('keunggulan'), description: t('desc_keunggulan') },
    { title: t('fokus_pelanggan'), description: t('desc_fokus_pelanggan') },
    { title: t('kelincahan'), description: t('desc_kelincahan') },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-white mb-6">
              {t('nilai_inti_yang')}
              <span className="block text-amber-400">{t('menggerakkan_kami')}</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              {t('desc_nilai_inti')}
            </p>
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg">
              <div className="text-3xl font-bold text-amber-400 mb-2">6</div>
              <div className="text-slate-400">{t('prinsip_fundamental')}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">
                  <div className="text-sm font-bold text-amber-400 group-hover:text-slate-900 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-400 group-hover:text-slate-700 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
