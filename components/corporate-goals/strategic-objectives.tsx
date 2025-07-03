"use client";
import { useTranslation } from "react-i18next"
import { Progress } from "@/components/ui/progress"

export function StrategicObjectivesSection() {
  const { t } = useTranslation();
  const objectives = [
    {
      title: t('kepemimpinan_pasar'),
      description: t('desc_kepemimpinan_pasar'),
      progress: 65,
      target: "2027",
      current: t('current_kepemimpinan_pasar'),
      goal: t('goal_kepemimpinan_pasar'),
    },
    {
      title: t('ekspansi_geografis'),
      description: t('desc_ekspansi_geografis'),
      progress: 40,
      target: "2026",
      current: t('current_ekspansi_geografis'),
      goal: t('goal_ekspansi_geografis'),
    },
    {
      title: t('tujuan_keberlanjutan'),
      description: t('desc_tujuan_keberlanjutan'),
      progress: 30,
      target: "2030",
      current: t('current_tujuan_keberlanjutan'),
      goal: t('goal_tujuan_keberlanjutan'),
    },
    {
      title: t('pengembangan_sdm'),
      description: t('desc_pengembangan_sdm'),
      progress: 75,
      target: "2025",
      current: t('current_pengembangan_sdm'),
      goal: t('goal_pengembangan_sdm'),
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">{t('strategic_objectives')}</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('desc_strategic_objectives')}
          </p>
        </div>

        <div className="space-y-8">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-white border-l-4 border-amber-500 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{objective.title}</h3>
                      <p className="text-slate-600">{objective.description}</p>
                    </div>
                    <div className="bg-slate-900 text-amber-400 px-3 py-1 rounded-full text-sm font-bold">
                      {objective.target}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">{t('current_status')}</div>
                      <div className="text-lg font-bold text-slate-900">{objective.current}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">{t('target_goal')}</div>
                      <div className="text-lg font-bold text-amber-600">{objective.goal}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-8 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-amber-400 mb-2">{objective.progress}%</div>
                    <div className="text-slate-400 text-sm mb-4">{t('progress')}</div>
                    <Progress value={objective.progress} className="h-2 bg-slate-800" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
