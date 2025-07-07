import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useTranslation } from "react-i18next"
import React, { useState } from "react";

export function ContactSection() {
  console.log("ContactSection rendered");
  const { t } = useTranslation();
  const contactInfo = [
    {
      icon: MapPin,
      title: t('alamat'),
      details: [
        t('alamat_lengkap_1'),
        t('alamat_lengkap_2')
      ],
    },
    {
      icon: Phone,
      title: t('telepon'),
      details: [t('telepon_nomor'), t('whatsapp')],
    },
    {
      icon: Mail,
      title: t('email'),
      details: [t('email_alamat')],
    },
    {
      icon: Clock,
      title: t('jam_operasional'),
      details: [t('jam_senin_jumat'), t('jam_sabtu'), t('jam_minggu')],
    },
  ]

  const [form, setForm] = useState({
    "your-name": "",
    "your-email": "",
    "your-subject": "",
    "your-message": "",
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
          name: form["your-name"],
          email: form["your-email"],
          subject: form["your-subject"],
          message: form["your-message"],
        }),
      });
      if (res.ok) {
        setFeedback("Pesan berhasil dikirim ke admin!");
        setForm({ "your-name": "", "your-email": "", "your-subject": "", "your-message": "" });
      } else {
        setFeedback("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (err) {
      setFeedback("Gagal mengirim pesan. Silakan cek koneksi internet Anda.");
    }
    setLoading(false);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('hubungi_kami')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('hubungi_kami_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('informasi_kontak')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <info.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">{t('kirim_pesan')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('nama_depan')}</label>
                      <Input name="your-name" value={form["your-name"]} onChange={handleChange} placeholder={t('placeholder_nama_depan')} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
                      <Input name="your-email" type="email" value={form["your-email"]} onChange={handleChange} placeholder={t('placeholder_email')} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input name="your-subject" value={form["your-subject"]} onChange={handleChange} placeholder="Subject" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('pesan')}</label>
                    <Textarea name="your-message" value={form["your-message"]} onChange={handleChange} placeholder={t('placeholder_pesan')} rows={5} />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" type="submit" disabled={loading} onClick={() => console.log('Button clicked')}>{loading ? t('loading') : t('kirim_pesan')}</Button>
                  {feedback && <div className="text-green-600 mt-2">{feedback}</div>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
