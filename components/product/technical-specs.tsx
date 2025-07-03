import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, FileText, Video } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function TechnicalSpecsSection() {
  const { t } = useTranslation();
  const specifications = {
    performance: [
      { parameter: "Operating Temperature", value: "-20°C to +80°C", unit: "Celsius" },
      { parameter: "Power Consumption", value: "5-50", unit: "kW" },
      { parameter: "Efficiency Rating", value: "≥95", unit: "%" },
      { parameter: "Noise Level", value: "≤65", unit: "dB" },
    ],
    dimensions: [
      { parameter: "Length", value: "2000-5000", unit: "mm" },
      { parameter: "Width", value: "1500-3000", unit: "mm" },
      { parameter: "Height", value: "1800-2500", unit: "mm" },
      { parameter: "Weight", value: "500-2000", unit: "kg" },
    ],
    electrical: [
      { parameter: "Voltage", value: "380-480", unit: "V" },
      { parameter: "Frequency", value: "50/60", unit: "Hz" },
      { parameter: "Protection Class", value: "IP65", unit: "" },
      { parameter: "Insulation Class", value: "Class F", unit: "" },
    ],
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('spesifikasi_teknis')}</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('desc_spesifikasi_teknis')}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Download className="h-4 w-4 mr-2" />
                  {t('unduh_katalog')}
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  {t('dokumen_teknis')}
                </Button>
                <Button variant="outline">
                  <Video className="h-4 w-4 mr-2" />
                  {t('video_demo')}
                </Button>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">{t('spesifikasi_peralatan')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="performance" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="performance">{t('performa')}</TabsTrigger>
                  <TabsTrigger value="dimensions">{t('dimensi')}</TabsTrigger>
                  <TabsTrigger value="electrical">{t('elektrikal')}</TabsTrigger>
                </TabsList>

                {Object.entries(specifications).map(([key, specs]) => (
                  <TabsContent key={key} value={key} className="mt-6">
                    <div className="space-y-4">
                      {specs.map((spec, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                          <div className="font-medium text-gray-900">{spec.parameter}</div>
                          <div className="text-right">
                            <span className="font-bold text-orange-600">{spec.value}</span>
                            {spec.unit && <span className="text-gray-500 ml-1">{spec.unit}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
