"use client";
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation();
  const footerLinks = {
    company: [
      { name: t("tentang_kami"), href: "/about" },
      { name: t("tujuan_perusahaan"), href: "/corporate-goals" },
      { name: t("karir"), href: "/careers" },
      { name: t("berita_media"), href: "/news" },
    ],
    services: [
      { name: t("peralatan_industri"), href: "/services/equipment" },
      { name: t("solusi_rekayasa"), href: "/services/engineering" },
      { name: t("pemeliharaan_dukungan"), href: "/services/maintenance" },
      { name: t("rantai_pasok"), href: "/services/supply-chain" },
    ],
    support: [
      { name: t("kontak_kami"), href: "/contact" },
      { name: t("unduhan"), href: "/download" },
      { name: t("dokumentasi"), href: "/docs" },
      { name: t("dukungan_teknis"), href: "/support" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('perusahaan')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('layanan')}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('dukungan')}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('ikuti_kami')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors" aria-label={link.name}>
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Cakra Bahana Sakti. Hak cipta dilindungi undang-undang.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                {t('kebijakan_privasi')}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                {t('syarat_ketentuan')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
