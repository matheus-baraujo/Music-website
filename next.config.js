/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    redirects: async() => {
        return [{
            source: '/about',
            destination: 'url de destino',
            permanent: true,
        }]
    }
}

module.exports = nextConfig