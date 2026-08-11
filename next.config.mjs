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
        destination: "/bis-isi-certification-metal-products",
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
       {
        source: "/bis-isi-certification-steel-products",
        destination: "/bis-isi-certification-metal-products",
        permanent: true, 
      },
      {
        source: "/testing_gold",
        destination: "/gold-testing",
        permanent: true, 
      },
      { source: "/food-ingredients/makhana-india", destination: "/food-ingredients/makhana", permanent: true },
      { source: "/food-ingredients/whey-protein-concentrate-80-instant-entc-entc-dairy-solutions-poland", destination: "/food-ingredients/whey-protein-concentrate-80-instant-entc", permanent: true },
      { source: "/food-ingredients/whey-protein-concentrate-80-instant-valley-queen-valley-queen-usa", destination: "/food-ingredients/whey-protein-concentrate-80-instant-valley-queen", permanent: true },
      { source: "/food-ingredients/lactose-k-lac-ba-emek-advanced-technologies-ltd-israel", destination: "/food-ingredients/lactose-k-lac", permanent: true },
      { source: "/food-ingredients/micellar-casein-85-inleit", destination: "/food-ingredients/micellar-casein-85", permanent: true },
      { source: "/food-ingredients/sunpro-instant-protein-concentrate-instant-wpc-80-saputo-dairy-australia-pty-ltd-australia", destination: "/food-ingredients/sunpro-instant-protein-concentrate-instant-wpc-80", permanent: true },
      { source: "/food-ingredients/mullins-whey-lactose-200-mesh-mullins-whey-inc-usa", destination: "/food-ingredients/mullins-whey-lactose-200-mesh", permanent: true },
      { source: "/food-ingredients/l-carnitine-base-hubei-grand-life-science-technology-co-ltd-china", destination: "/food-ingredients/l-carnitine-base", permanent: true },
      { source: "/food-ingredients/l-glutamine-xinjiang-fufeng-biotechnologies-co-ltd-china", destination: "/food-ingredients/l-glutamine", permanent: true }
    ];
  },
};

export default nextConfig;
