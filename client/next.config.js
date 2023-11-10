/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const env = {
  BACKEND_URL: 'http://localhost:3001'
}

module.exports =  {
  nextConfig,
  env
}
