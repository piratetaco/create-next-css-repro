/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  transpilePackages: ['css-modules-component-library']
};

export default nextConfig;
