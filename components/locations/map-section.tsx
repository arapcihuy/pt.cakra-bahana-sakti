"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Phone, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

export function MapSection() {
  const { t } = useTranslation();
  const [selectedOffice, setSelectedOffice] = useState(1)

  const offices = [
    {
      id: 1,
      name: t('jakarta_headquarters'),
      type: "headquarters",
      address: t('jakarta_address'),
      phone: "+62 21 1234 5678",
      email: "jakarta@cakrabahanasakti.com",
      coordinates: { lat: -6.2088, lng: 106.8456 },
    },
    {
      id: 2,
      name: t('surabaya_branch'),
      type: "branch",
      address: t('surabaya_address'),
      phone: "+62 31 9876 5432",
      email: "surabaya@cakrabahanasakti.com",
      coordinates: { lat: -7.2575, lng: 112.7521 },
    },
    {
      id: 3,
      name: t('bangkok_office'),
      type: "regional",
      address: t('bangkok_address'),
      phone: "+66 2 123 4567",
      email: "bangkok@cakrabahanasakti.com",
      coordinates: { lat: 13.7563, lng: 100.5018 },
    },
    {
      id: 4,
      name: t('kuala_lumpur_office'),
      type: "regional",
      address: t('kuala_lumpur_address'),
      phone: "+60 3 2345 6789",
      email: "kl@cakrabahanasakti.com",
      coordinates: { lat: 3.139, lng: 101.6869 },
    },
    {
      id: 5,
      name: t('singapore_office'),
      type: "regional",
      address: t('singapore_address'),
      phone: "+65 6789 0123",
      email: "singapore@cakrabahanasakti.com",
      coordinates: { lat: 1.2966, lng: 103.8764 },
    },
    {
      id: 6,
      name: t('manila_office'),
      type: "regional",
      address: t('manila_address'),
      phone: "+63 2 8765 4321",
      email: "manila@cakrabahanasakti.com",
      coordinates: { lat: 14.5547, lng: 121.0244 },
    },
  ]

  const selectedOfficeData = offices.find((office) => office.id === selectedOffice)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('interactive_map')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('desc_interactive_map')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Office List */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('select_location')}</h3>
            <div className="space-y-3">
              {offices.map((office) => (
                <Card
                  key={office.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedOffice === office.id
                      ? "ring-2 ring-teal-500 bg-teal-50"
                      : "hover:shadow-md hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedOffice(office.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{office.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{office.address}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          office.type === "headquarters"
                            ? "bg-red-100 text-red-800"
                            : office.type === "branch"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {office.type === "headquarters" ? t('hq') : office.type === "branch" ? t('branch') : t('regional')}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-2">
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl h-96 mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 opacity-20"></div>
              <div className="text-center z-10">
                <MapPin className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">{t('interactive_map')}</p>
                <p className="text-sm text-gray-500">{t('showing')}: {selectedOfficeData?.name}</p>
              </div>
              {/* Map markers simulation */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            {/* Selected Office Details */}
            {selectedOfficeData && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{selectedOfficeData.name}</h3>
                    <Badge
                      className={
                        selectedOfficeData.type === "headquarters"
                          ? "bg-red-100 text-red-800"
                          : selectedOfficeData.type === "branch"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                      }
                    >
                      {selectedOfficeData.type === "headquarters"
                        ? t('headquarters')
                        : selectedOfficeData.type === "branch"
                          ? t('branch_office')
                          : t('regional_office')}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{t('address')}</div>
                        <div className="text-gray-600 text-sm">{selectedOfficeData.address}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{t('phone')}</div>
                        <div className="text-gray-600 text-sm">{selectedOfficeData.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 md:col-span-2">
                      <Mail className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{t('email')}</div>
                        <div className="text-gray-600 text-sm">{selectedOfficeData.email}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                      <Navigation className="h-4 w-4 mr-2" />
                      {t('get_directions')}
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      {t('call_now')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
