/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{
    domains:['https://via.placeholder.com'],
    loader:'custom',
    path:'/photos'
  }
}
