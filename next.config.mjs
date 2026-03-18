/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
   images: {
    unoptimized: true
  },
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
       {
        source: "/epr_services",
        destination: "/epr-registration-services",
        permanent: true, 
      },
      {
        source: "/traning_services",
        destination: "/training-services-national-international",
        permanent: true, 
      },
       {
        source: "/nabl_services",
        destination: "/nabl-accreditation-services",
        permanent: true, 
      },
       {
        source: "/bolgs",
        destination: "/blogs",
        permanent: true, 
      },
      {
        source: "/blogs/bis-isi-mark-product-certification-guide",
        destination: "blogs/bis-isi-mark-product-certificate-guide",
        permanent: true, 
      },
       {
        source: "/steel-products",
        destination: "/bis-isi-certification-steel-products",
        permanent: true, 
      },
       {
        source: "/latest_updates",
        destination: "/latest-notifications",
        permanent: true, 
      },
      {
        source: "/isi-products/isi-certification-office-work-chair-17635",
        destination: "/isi-products/isi-certification-office-work-chair-17631",
        permanent: true, 
      },
       {
        source: "/bis-isi-mark-certification-electronics-products",
        destination: "/bis-isi-mark-certification-electrical-electronics-products",
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
