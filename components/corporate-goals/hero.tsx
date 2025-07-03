"use client";
import { useTranslation } from "react-i18next"

export function CorporateGoalsHero() {
  const { t } = useTranslation();
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
              {t('strategi_perusahaan')}
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              {t('membangun')}
              <span className="block text-amber-400">{t('masa_depan_bersama')}</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              {t('tujuan_perusahaan_desc')}
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 transform rotate-3">
              <div className="bg-white rounded-xl p-6 transform -rotate-3">
                <div className="space-y-4">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-16 bg-slate-100 rounded-lg"></div>
                    <div className="h-16 bg-slate-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
