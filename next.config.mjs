/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      HOST_API_URL:process.env.HOST_API_URL,
    }
};
export default nextConfig;
