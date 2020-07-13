const withOffline = require('next-offline')

const nextConfig = {
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'ohakutsu-com',
          expiration: {
            maxAgeSeconds: 60 * 60 * 1
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}

module.exports = withOffline(nextConfig)
