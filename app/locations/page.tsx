"use client";

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationsHero } from "@/components/locations/hero"
import { MainLocationSection } from "@/components/locations/main-location"
import { ContactInfoSection } from "@/components/locations/contact-info"

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LocationsHero />
        <MainLocationSection />
        <ContactInfoSection />
      </main>
      <Footer />
    </div>
  )
}
