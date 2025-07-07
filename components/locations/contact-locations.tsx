import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Clock, MessageSquare } from "lucide-react"
import { useTranslation } from "react-i18next"
import React, { useState, useEffect } from "react";

export function ContactLocationsSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    console.log("Form rendered");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLocationChange = (value: string) => {
    setForm({ ...form, location: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("handleSubmit terpanggil");
    setLoading(true);
    setFeedback("");
    console.log("Form submit triggered", form);
    try {
      const res = await fetch("https://formspree.io/f/mjkrddjv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.firstName + " " + form.lastName,
          email: form.email,
          message: form.message,
        }),
      });
      console.log("Formspree response", res);
      if (res.ok) {
        setFeedback("Pesan berhasil dikirim ke admin!");
        setForm({ firstName: "", lastName: "", email: "", phone: "", location: "", message: "" });
      } else {
        let errorText = await res.text();
        setFeedback("Gagal mengirim pesan: " + errorText);
        console.error("Formspree error detail", errorText);
      }
    } catch (err) {
      setFeedback("Gagal mengirim pesan. Silakan cek koneksi internet Anda.");
      console.error("Formspree error", err);
    }
    setLoading(false);
  };

  const emergencyContacts = [
    {
      region: t('indonesia'),
      phone: "+62 21 1234 5678",
      email: "emergency.id@cakrabahanasakti.com",
      hours: t('emergency_support_24_7'),
    },
    {
      region: t('thailand'),
      phone: "+66 2 123 4567",
      email: "emergency.th@cakrabahanasakti.com",
      hours: t('emergency_support_thailand'),
    },
    {
      region: t('malaysia'),
      phone: "+60 3 2345 6789",
      email: "emergency.my@cakrabahanasakti.com",
      hours: t('emergency_support_malaysia'),
    },
    {
      region: t('singapore'),
      phone: "+65 6789 0123",
      email: "emergency.sg@cakrabahanasakti.com",
      hours: t('emergency_support_24_7'),
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('kontak_lokasi_kami')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('desc_kontak_lokasi_kami')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                <MessageSquare className="h-6 w-6 mr-3 text-teal-600" />
                {t('send_message')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{color:'red'}}>DEBUG: Ini form yang kamu edit!</div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('first_name')}</label>
                    <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder={t('your_first_name')} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('last_name')}</label>
                    <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder={t('your_last_name')} required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
                  <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t('your_email_placeholder')} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('phone')}</label>
                  <Input name="phone" value={form.phone} onChange={handleChange} placeholder={t('your_phone_placeholder')} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('preferred_location')}</label>
                  <Select value={form.location} onValueChange={handleLocationChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder={t('select_nearest_office')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jakarta">{t('jakarta_headquarters')}</SelectItem>
                      <SelectItem value="surabaya">{t('surabaya_branch')}</SelectItem>
                      <SelectItem value="bangkok">{t('bangkok_office')}</SelectItem>
                      <SelectItem value="kuala-lumpur">{t('kuala_lumpur_office')}</SelectItem>
                      <SelectItem value="singapore">{t('singapore_office')}</SelectItem>
                      <SelectItem value="manila">{t('manila_office')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('message')}</label>
                  <Textarea name="message" value={form.message} onChange={handleChange} placeholder={t('message_placeholder')} rows={5} required />
                </div>

                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg" disabled={loading}>
                  {loading ? t('loading') : t('send_message')}
                </button>
                {feedback && <div className="text-green-600 mt-2">{feedback}</div>}
              </form>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-red-800">
                  <Phone className="h-5 w-5 mr-3" />
                  {t('emergency_support')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 mb-4">
                  {t('emergency_support_desc')}
                </p>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-1">+62 21 EMERGENCY</div>
                    <div className="text-sm text-red-500">{t('emergency_hotline')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">{t('regional_emergency_contacts')}</h3>
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{contact.region}</h4>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {t('available')}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{contact.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
