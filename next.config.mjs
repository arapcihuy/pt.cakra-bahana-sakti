/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // i18n: {
  //   locales: ['id', 'en'],
  //   defaultLocale: 'id',
  // },
}

export default {
  output: 'export',
  ...nextConfig,
}
