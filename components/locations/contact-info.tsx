import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MessageSquare, Car, Bus, Plane, Clock, MapPin } from "lucide-react"
import { useTranslation } from "react-i18next"
import React, { useState } from "react";

export function ContactInfoSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");
    try {
      const res = await fetch("https://formspree.io/f/mjkrddjv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setFeedback("Pesan berhasil dikirim ke admin!");
        setForm({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setFeedback("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (err) {
      setFeedback("Gagal mengirim pesan. Silakan cek koneksi internet Anda.");
    }
    setLoading(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('hubungi_kami')}</h2>
            <p className="text-gray-600 mb-8">
              {t('hubungi_kami_desc')}
            </p>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{t('kirim_pesan')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('nama')}</label>
                      <Input name="name" value={form.name} onChange={handleChange} placeholder={t('nama_lengkap_anda')} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('telepon')}</label>
                      <Input name="phone" value={form.phone} onChange={handleChange} placeholder={t('nomor_telepon_anda')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
                    <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t('email_anda_placeholder')} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('subjek')}</label>
                    <Input name="subject" value={form.subject} onChange={handleChange} placeholder={t('subjek_placeholder')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('pesan')}</label>
                    <Textarea name="message" value={form.message} onChange={handleChange} placeholder={t('pesan_placeholder')} rows={5} required />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg" type="submit" disabled={loading}>
                    {loading ? t('loading') : t('kirim_pesan')}
                  </Button>
                  {feedback && <div className="text-green-600 mt-2">{feedback}</div>}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* How to Find Us */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{t('cara_menemukan_kami')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">{t('dengan_mobil')}</div>
                      <div className="text-sm text-gray-600">{t('desc_dengan_mobil')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">{t('transportasi_umum')}</div>
                      <div className="text-sm text-gray-600">{t('desc_transportasi_umum')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">{t('dari_bandara')}</div>
                      <div className="text-sm text-gray-600">{t('desc_dari_bandara')}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Area */}
            <Card className="border-0 shadow-lg bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{t('service_coverage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('service_coverage_desc')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{t('yogyakarta')}</Badge>
                  <Badge variant="secondary">{t('semarang')}</Badge>
                  <Badge variant="secondary">{t('solo')}</Badge>
                  <Badge variant="secondary">{t('magelang')}</Badge>
                  <Badge variant="secondary">{t('klaten')}</Badge>
                  <Badge variant="secondary">{t('bantul')}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
