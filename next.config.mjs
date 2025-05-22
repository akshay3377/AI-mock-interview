

/** @type {import('next').NextConfig} */
const nextConfig = {
  //  serverExternalPackages: ['pdf2json'],

  experimental: {
    serverComponentsExternalPackages: ["pdf2json"],
  },
  images: {
    domains: [
      "lh3.googleusercontent.com", // Google profile photos
      "firebasestorage.googleapis.com", // Firebase Storage
    ],
  },
};



export default nextConfig; // ✅ ES Module syntax
