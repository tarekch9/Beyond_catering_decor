/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
          port: '',
          pathname: '/**', // Erlaubt alle Pfade unter dieser Domain
        },
      ],
    },
  };


export default nextConfig;
