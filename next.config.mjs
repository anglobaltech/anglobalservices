/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: '/:slug*.html',
        destination: '/:slug*',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
