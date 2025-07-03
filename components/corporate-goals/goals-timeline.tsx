import { useTranslation } from 'react-i18next'

export function GoalsTimelineSection() {
  const { t } = useTranslation()

  const timeline = [
    {
      year: "2024",
      status: "completed",
      title: "Transformasi Digital",
      description: "Implementasi sistem digital secara menyeluruh",
      achievements: ["Penerapan ERP", "Otomasi alur kerja", "Platform analitik"],
    },
    {
      year: "2025",
      status: "current",
      title: "Ekspansi Pasar Tahap I",
      description: "Penguatan kehadiran regional",
      achievements: ["Fasilitas di Thailand", "Kemitraan", "Tim menjadi 500+"],
    },
    {
      year: "2026",
      status: "planned",
      title: "Pengembangan Pusat Inovasi",
      description: "Pendirian pusat R&D",
      achievements: ["Fasilitas riset", "Kemitraan universitas", "Pertumbuhan paten"],
    },
    {
      year: "2027",
      status: "planned",
      title: "Kepemimpinan Pasar",
      description: "Pencapaian pangsa pasar 25%",
      achievements: ["Dominasi pasar", "Pengakuan merek", "Keunggulan pelanggan"],
    },
    {
      year: "2030",
      status: "planned",
      title: "Tonggak Keberlanjutan",
      description: "Pencapaian netral karbon",
      achievements: ["Emisi nol bersih", "Ekonomi sirkular", "Teknologi hijau"],
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">{t('strategic_roadmap')}</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Perjalanan kami dari visi menjadi kenyataan, dipetakan melalui tonggak-tonggak utama
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-slate-700 z-0"></div>
                )}

                <div className="relative z-10">
                  {/* Year badge */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold mb-4 mx-auto ${
                      item.status === "completed"
                        ? "bg-amber-500 text-slate-900"
                        : item.status === "current"
                          ? "bg-slate-700 border-2 border-amber-500 text-amber-500"
                          : "bg-slate-800 border border-slate-600 text-slate-400"
                    }`}
                  >
                    {item.year}
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 rounded-xl border-2 ${
                      item.status === "completed"
                        ? "bg-amber-500 border-amber-500 text-slate-900"
                        : item.status === "current"
                          ? "bg-slate-800 border-amber-500 text-white"
                          : "bg-slate-800 border-slate-700 text-slate-300"
                    }`}
                  >
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p
                      className={`text-sm mb-4 ${
                        item.status === "completed"
                          ? "text-slate-700"
                          : item.status === "current"
                            ? "text-slate-300"
                            : "text-slate-400"
                      }`}
                    >
                      {item.description}
                    </p>

                    <div className="space-y-1">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className={`text-xs flex items-center ${
                            item.status === "completed"
                              ? "text-slate-700"
                              : item.status === "current"
                                ? "text-slate-300"
                                : "text-slate-400"
                          }`}
                        >
                          <div
                            className={`w-1 h-1 rounded-full mr-2 ${
                              item.status === "completed"
                                ? "bg-slate-700"
                                : item.status === "current"
                                  ? "bg-amber-500"
                                  : "bg-slate-500"
                            }`}
                          ></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
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
