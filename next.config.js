const withPlugins = require("next-compose-plugins");
const progressBar = require("next-progressbar");
const offline = require("next-offline");
const config = require("./package.json");

module.exports = withPlugins([
  [progressBar, {}],
  [
    offline,
    {
      workboxOpts: {
        swDest: "static/service-worker.js",
        cacheId: config.configuration.shortName,
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "offlineCache",
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 200
              },
              cacheableResponse: {
                statuses: [0, 200],
                headers: {
                  "x-test": "true"
                }
              }
            }
          },
          {
            urlPattern: /.jpg$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-resources",
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /.png$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-resources",
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /.svg$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-resources",
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /.min.js$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-resources",
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ]
      }
    }
  ]
]);
