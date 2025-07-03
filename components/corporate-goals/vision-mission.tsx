"use client";
import { useTranslation } from "react-i18next"

export function VisionMissionSection() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">{t('visi_misi_motto')}</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Vision */}
          <div className="bg-slate-900 text-white p-12 relative">
            <div className="absolute top-6 left-6 w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center">
              <span className="text-amber-500 font-bold">01</span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">{t('visi')}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t('visi_desc')}
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-amber-500 text-slate-900 p-12 relative">
            <div className="absolute top-6 left-6 w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold">02</span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">{t('misi')}</h3>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>{t('misi_1')}</li>
                <li>{t('misi_2')}</li>
                <li>{t('misi_3')}</li>
                <li>{t('misi_4')}</li>
                <li>{t('misi_5')}</li>
              </ul>
            </div>
          </div>

          {/* Motto */}
          <div className="bg-slate-100 text-slate-900 p-12 relative">
            <div className="absolute top-6 left-6 w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold">03</span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">{t('motto')}</h3>
              <p className="font-bold text-lg mb-2">{t('cetar')}</p>
              <p className="mb-4 text-lg">{t('cetar_desc')}</p>
              <div className="space-y-2">
                <div>
                  <span className="font-bold">{t('cepat')}</span>
                  <ul className="list-disc pl-6 text-base">
                    <li>{t('cepat_desc')}</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold">{t('tanggap')}</span>
                  <ul className="list-disc pl-6 text-base">
                    <li>{t('tanggap_desc')}</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold">{t('reliable')}</span>
                  <ul className="list-disc pl-6 text-base">
                    <li>{t('reliable_desc')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
