"use client";
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, Globe } from "lucide-react"
import { useTranslation } from "react-i18next"

export function AboutSection() {
  const { t } = useTranslation();
  const stats = [
    { icon: Building2, label: t('tahun_pengalaman'), value: "25+" },
    { icon: Users, label: t('tim_ahli'), value: "100+" },
    { icon: Award, label: t('proyek_selesai'), value: "500+" },
    { icon: Globe, label: t('negara_dilayani'), value: "15+" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('tentang_cbs')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tentang_cbs_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('misi_visi_kami')}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('misi')}</h4>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>{t('misi_1')}</li>
                  <li>{t('misi_2')}</li>
                  <li>{t('misi_3')}</li>
                  <li>{t('misi_4')}</li>
                  <li>{t('misi_5')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('visi')}</h4>
                <p className="text-gray-600">
                  {t('visi_desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/b6743796bc94a4bb441d54dade9d4ab9.jpg"
              alt="CBS Premium Aluminum Connectors"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
