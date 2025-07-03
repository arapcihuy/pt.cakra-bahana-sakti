"use client";
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/factory-floor.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {t('hero_title_1')}
          <br />
          <span className="text-blue-400">{t('hero_title_2')}</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {t('hero_desc')}
        </p>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full"
          asChild
        >
          <a href="/product">
            {t('selengkapnya')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  )
}
