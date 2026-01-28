/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/:path(.*).html",
        destination: "/:path",
        permanent: true,
      },

      {
        source: "/msme_service",
        destination: "/msme-nsic-registration",
        permanent: true,
      },
      {
        source: "/crs_electronic_it",
        destination: "/bis-crs-registration-electronic-products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
