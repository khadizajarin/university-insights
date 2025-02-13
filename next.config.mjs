/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.wixstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'studyabroadlife.org',
            },
            {
                protocol: 'https',
                hostname: 'www.iowafarmbureau.com'
            },
            {
                protocol: 'https',
                hostname: 'www.lynn.edu'
            },
            {
                protocol: 'https',
                hostname: 'esdubai.com'
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com'
            },
            {
                protocol: 'https',
                hostname: 'slideplayer.com'
            },
            {
                protocol: 'https',
                hostname: 'www.scholarshipregion.com'
            },
            {
                protocol: 'https',
                hostname: 'www.researchgate.net'
            },
            {
                protocol: 'https',
                hostname: 'businessmoves.com'
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.prod.website-files.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn-clmkg.nitrocdn.com'
            },
            {
                protocol: 'https',
                hostname: 'livability.com'
            },
            {
                protocol: 'https',
                hostname: 'educationconnect.com.au'
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com'
            },
            {
                protocol: 'https',
                hostname: 'collegenroll.com'
            },
            {
                protocol: 'https',
                hostname: 'blogs.chapman.edu'
            },
            {
                protocol: 'https',
                hostname: '149357281.v2.pressablecdn.com'
            },
            {
                protocol: 'https',
                hostname: 'live.staticflickr.com'
            },
        ]
    }
};

// module.exports = {
//     experimental: {
//       esmExternals: false, // Disable ESM for external libraries
//     },
//   };
  

export default nextConfig;
