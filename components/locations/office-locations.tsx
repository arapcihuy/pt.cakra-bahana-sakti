import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Navigation, Building2 } from "lucide-react"
import { useTranslation } from "react-i18next"

export function OfficeLocationsSection() {
  const { t } = useTranslation();
  const offices = [
    {
      id: 1,
      name: t('jakarta_headquarters'),
      type: "headquarters",
      address: t('jakarta_address'),
      phone: "+62 21 1234 5678",
      email: "jakarta@cakrabahanasakti.com",
      hours: t('jakarta_hours'),
      services: [t('sales'), t('engineering'), t('support'), t('training')],
      image: "/placeholder.svg?height=200&width=300",
      coordinates: { lat: -6.2088, lng: 106.8456 },
    },
    {
      id: 2,
      name: t('surabaya_branch'),
      type: "branch",
      address: t('surabaya_address'),
      phone: "+62 31 9876 5432",
      email: "surabaya@cakrabahanasakti.com",
      hours: t('surabaya_hours'),
      services: [t('sales'), t('support'), t('maintenance')],
      image: "/placeholder.svg?height=200&width=300",
      coordinates: { lat: -7.2575, lng: 112.7521 },
    },
    {
      id: 3,
      name: t('bangkok_office'),
      type: "regional",
      address: t('bangkok_address'),
      phone: "+66 2 123 4567",
      email: "bangkok@cakrabahanasakti.com",
      hours: t('bangkok_hours'),
      services: [t('sales'), t('support')],
      image: "/placeholder.svg?height=200&width=300",
      coordinates: { lat: 13.7563, lng: 100.5018 },
    },
    {
      id: 4,
      name: t('kuala_lumpur_office'),
      type: "regional",
      address: t('kuala_lumpur_address'),
      phone: "+60 3 2345 6789",
      email: "kl@cakrabahanasakti.com",
      hours: t('kuala_lumpur_hours'),
      services: [t('sales'), t('support')],
      image: "/placeholder.svg?height=200&width=300",
      coordinates: { lat: 3.139, lng: 101.6869 },
    },
    {
      id: 5,
      name: t('singapore_office'),
      type: "regional",
      address: t('singapore_address'),
      phone: "+65 6789 0123",
      email: "singapore@cakrabahanasakti.com",
      hours: t('singapore_hours'),
      services: [t('sales'), t('engineering')],
      image: "/placeholder.svg?height=200&width=300",
      coordinates: { lat: 1.2966, lng: 103.8764 },
    },
    {
      id: 6,
      name: t('manila_office'),
      type: "regional",
      address: t('manila_address'),
      phone: "+63 2 8765 4321",
      email: "manila@cakrabahanasakti.com",
      hours: t('manila_hours'),
      services: [t('sales'), t('support')],
      image: "/placeholder.svg?height=200&width=300",
      coordinates: { lat: 14.5547, lng: 121.0244 },
    },
  ]

  const getOfficeTypeColor = (type: string) => {
    switch (type) {
      case "headquarters":
        return "bg-red-100 text-red-800"
      case "branch":
        return "bg-blue-100 text-blue-800"
      case "regional":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getOfficeTypeLabel = (type: string) => {
    switch (type) {
      case "headquarters":
        return t('headquarters');
      case "branch":
        return t('branch_office');
      case "regional":
        return t('regional_office');
      default:
        return t('office');
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('office_locations')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('desc_office_locations')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <Card
              key={office.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0"
            >
              <div className="relative">
                <img
                  src={office.image || "/placeholder.svg"}
                  alt={office.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${getOfficeTypeColor(office.type)}`}>
                  {getOfficeTypeLabel(office.type)}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-teal-600" />
                  {office.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{office.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{office.hours}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('services_available')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {office.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                    <Navigation className="h-4 w-4 mr-2" />
                    {t('get_directions')}
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
