"use client";
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Eye, Share2, Mail, Phone } from "lucide-react"

export function ProposalDownloadSection() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4 mr-2" />
            {t('proposal_perusahaan')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('unduh')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {t('proposal_perusahaan')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('desc_proposal_perusahaan')}
          </p>
        </div>
      </section>

      {/* Main Download Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Proposal Preview */}
            <div className="order-2 lg:order-1">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-white/20 text-white border-white/30">PROPOSAL RESMI</Badge>
                      <div className="text-right">
                        <div className="text-sm opacity-80">Ukuran Dokumen</div>
                        <div className="font-bold">15,2 MB</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Aksesoris Gardu Induk</h3>
                    <p className="text-blue-100">Katalog Produk Lengkap & Spesifikasi Teknis</p>
                  </div>

                  {/* Document Preview */}
                  <div className="bg-white p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Laboratorium Pengujian Sesuai Standar ANSI C119.4-2011</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Spesifikasi Produk Lengkap</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Gambar Teknis & Daftar Komponen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Komponen Gardu Induk 230kV</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Kapasitas Manufaktur</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Download Information */}
            <div className="order-1 lg:order-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-blue-600" />
                    {t('proposal_perusahaan')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Isi Proposal:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Katalog Produk</div>
                          <div className="text-sm text-gray-600">Rangkaian lengkap aksesoris gardu induk</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Spesifikasi Teknis</div>
                          <div className="text-sm text-gray-600">Spesifikasi detail untuk semua tipe konektor</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Standar Kualitas</div>
                          <div className="text-sm text-gray-600">Dokumentasi kepatuhan ANSI & NEMA</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Informasi Perusahaan</div>
                          <div className="text-sm text-gray-600">Kapasitas & fasilitas manufaktur</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-500">Format File:</span>
                        <div className="font-medium text-gray-900">Dokumen PDF</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Halaman:</span>
                        <div className="font-medium text-gray-900">45 Halaman</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Ukuran File:</span>
                        <div className="font-medium text-gray-900">15,2 MB</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Diperbarui:</span>
                        <div className="font-medium text-gray-900">Des 2024</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                        <Download className="h-5 w-5 mr-2" />
                        Unduh Proposal (15,2 MB)
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Pratinjau
                        </Button>
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <Share2 className="h-4 w-4 mr-2" />
                          Bagikan
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('produk_unggulan')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('desc_produk_unggulan_lengkap')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <img
                  src="/images/cbs-3.png"
                  alt="Single Arm Tee Connector"
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="font-semibold text-gray-900 mb-2">{t('single_arm_tee_connector')}</h3>
                <p className="text-sm text-gray-600">{t('desc_single_arm_tee_connector')}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <img
                  src="/images/cbs-2.png"
                  alt="Duplex Connector System"
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="font-semibold text-gray-900 mb-2">{t('duplex_connector_system')}</h3>
                <p className="text-sm text-gray-600">{t('desc_duplex_connector_system')}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <img src="/images/cbs-4.png" alt="Tee Connector" className="w-24 h-24 mx-auto mb-4 object-contain" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('tee_connector')}</h3>
                <p className="text-sm text-gray-600">{t('desc_tee_connector')}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <img
                  src="/images/cbs-6.png"
                  alt="Sliding Connector"
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="font-semibold text-gray-900 mb-2">{t('sliding_connector')}</h3>
                <p className="text-sm text-gray-600">{t('desc_sliding_connector')}</p>
              </CardContent>
            </Card>
          </div>

          {/* Real Product Photo */}
          <div className="text-center">
            <Card className="border-0 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <img
                  src="/images/connector-photo.png"
                  alt="CBS Aluminum Connectors - Real Product"
                  className="w-full max-w-md mx-auto mb-6 object-contain"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('premium_quality_manufacturing')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('desc_premium_quality_manufacturing')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('butuh_informasi_lanjut')}</h2>
            <p className="text-xl text-gray-600">
              {t('desc_butuh_informasi_lanjut')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('call_us')}</h3>
                <p className="text-gray-600 mb-4">{t('desc_call_us')}</p>
                <div className="space-y-2">
                  <div className="font-medium text-gray-900">(0274) 2887324</div>
                  <div className="text-sm text-gray-600">{t('jam_kerja')}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('email_us')}</h3>
                <p className="text-gray-600 mb-4">{t('desc_email_us')}</p>
                <div className="space-y-2">
                  <div className="font-medium text-gray-900">cakrabahanasakti@gmail.com</div>
                  <div className="text-sm text-gray-600">{t('respon_24_jam')}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
