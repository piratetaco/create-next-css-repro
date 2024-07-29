/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  transpilePackages: ['@nicollet/react-icons', '@web/events', '@web/nicollet', '@web/config', '@web/react-contexts', '@web/react-hooks', '@web/url', '@web/utilities', 'css-modules-component-library']
};

export default nextConfig;
