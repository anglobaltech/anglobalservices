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
        source: "/msme_services",
        destination: "/msme-nsic-registration",
        permanent: true,
      },
      {
        source: "/crs_electronic_it",
        destination: "/bis-crs-registration-electronic-products",
        permanent: true,
      },
       {
        source: "/FMCS_services",
        destination: "/foreign-manufacturers-certification-scheme-fmcs",
        permanent: true,
      },
       {
        source: "/isi",
        destination: "/bis-isi-mark-certification",
        permanent: true,
      },
      {
        source: "/solar_services",
        destination: "/bis-registration-for-solar-panels",
        permanent: true,
      },
      {
        source: "/wpc_services",
        destination: "/wpc-certification-services",
        permanent: true, 
      },
      {
        source: "/trademark_services",
        destination: "/trademark-registration-services",
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
