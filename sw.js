const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "lwscode"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b97ac3906608544391c9dced15ddbc39","url":"./0/index.html"},{"revision":"36009842880db86ec1da324df7e37a84","url":"./1/index.html"},{"revision":"669a1e2132913c9d27b918cc28e07af3","url":"./10/index.html"},{"revision":"46cbbb45fb46d5aeafeae43ca12072c6","url":"./11/index.html"},{"revision":"ccfdd94edcbe92872902179cadc4efa5","url":"./12/index.html"},{"revision":"08b037a0e592f7b9a2b7b4ed9d72261f","url":"./13/index.html"},{"revision":"4f795bfcc6b6f09a2aa79ac16f84a98b","url":"./14/index.html"},{"revision":"e2a2e656ffa71c26c8faaa98ec7c2387","url":"./15/index.html"},{"revision":"1c68334f8f3cc12a1a6840f13da14402","url":"./16/index.html"},{"revision":"a0f018a3562bd932de3048a726841516","url":"./17/index.html"},{"revision":"e21a4672ca8c7ebf7704b6c533a00bda","url":"./18/index.html"},{"revision":"1c57a807d92421408e7d0c7e7f59c48f","url":"./19/index.html"},{"revision":"3aa32dac26bd63d8dd9718970cce360e","url":"./2/index.html"},{"revision":"13ee3bb374c09169ea255c247a445d8c","url":"./20/index.html"},{"revision":"b50e66902316b40422a58acc71217054","url":"./21/index.html"},{"revision":"a08af2b8869f184edce6504b0e7b2ef1","url":"./22/index.html"},{"revision":"0e118ede3166edaba2c2048a750d6d65","url":"./226/index.html"},{"revision":"6d0d0d1ebbb978ed1f57e733be0c752b","url":"./23/index.html"},{"revision":"9575c659f332fe49964cb2a99bd94383","url":"./24/index.html"},{"revision":"ab68a3b1c151c21222164ec6adc86fda","url":"./25/index.html"},{"revision":"d80449a5926e92efd47845cbaaeeb99b","url":"./26/index.html"},{"revision":"dddbc3cc95443c15adfc293477a86000","url":"./3/index.html"},{"revision":"bb3ed1ee4a5975ea51b7e19afe989c8c","url":"./32699/index.html"},{"revision":"60dfa972f98d0b5c23f677d18465875e","url":"./4/index.html"},{"revision":"f79d9970359be74b20d763c80aa0d968","url":"./404.html"},{"revision":"dc1403a9f1f445a57fb7f16f883dbffe","url":"./5/index.html"},{"revision":"ba657316ac765ebdf0853671b129e064","url":"./6/index.html"},{"revision":"08cb24bb2e33c4ff0d1139d389aae20a","url":"./7/index.html"},{"revision":"636939e47c82cbca9787ca78d9d3463c","url":"./8/index.html"},{"revision":"3f4565e602a40199aa45f3f6f5acfeeb","url":"./9/index.html"},{"revision":"6aa16a8ef5da96501fd6ca8ad78b3501","url":"./archives/2020/10/index.html"},{"revision":"37f9eaf3954d669a124851675cb5ff3a","url":"./archives/2020/index.html"},{"revision":"dfdbbf321a2929fd72a1f0cca0a485f0","url":"./archives/2021/04/index.html"},{"revision":"3bbf2575badb19d772b16e3c33522f73","url":"./archives/2021/04/page/2/index.html"},{"revision":"0cb582cd6ab1b96a0c812056512bacc3","url":"./archives/2021/04/page/3/index.html"},{"revision":"e1fa6fb1c788f63d6898bc0e4f60ad0a","url":"./archives/2021/index.html"},{"revision":"c58c65c0f13782ade0482225a19f7bfb","url":"./archives/2021/page/2/index.html"},{"revision":"12f88d084a30d6365ae2b6280c7e584e","url":"./archives/2021/page/3/index.html"},{"revision":"57914c84dcf3f67d1a090842303930c5","url":"./archives/index.html"},{"revision":"e16a86f02361f12218fa00272c88dddc","url":"./archives/page/2/index.html"},{"revision":"b30a143575756b8cb9cad2154ad95f54","url":"./archives/page/3/index.html"},{"revision":"20da5730c73c62eaffd152ae0dccdd0b","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"9595927593b5b0725ffc1c8d23f598e4","url":"./books/index.html"},{"revision":"c0b0c647729e4b5788d47c9e3f8f0b45","url":"./categories/云服务/index.html"},{"revision":"6be7aa1560b9e43a9451410e8848657f","url":"./categories/Linux/index.html"},{"revision":"39c2daf34bf0ce6d4d3f38773467d50a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"80974b60e699a38e34b9f7584287d11d","url":"./games/index.html"},{"revision":"e854494d6c4ab961e5cb01bf120234d7","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"651f18f3520543c32060c02287b3f012","url":"./link/index.html"},{"revision":"b9b2b455a3c4a36b4527e5d913a5fcdf","url":"./manifest.json"},{"revision":"8e5d58a413ceb318b8f709c4bbbf080b","url":"./movies/index.html"},{"revision":"9094ba3ad190280c2ee740c59e2b6235","url":"./page/2/index.html"},{"revision":"86eaf316c7ae35d92b67f81a0b826867","url":"./page/3/index.html"},{"revision":"aa9eeb0dc3d1b745035cc03939613847","url":"./self/dracula.css"},{"revision":"81e2160a9c8138a363d97ee222d183b5","url":"./self/kimbie.css"},{"revision":"d44088eaf57999cc6788ef12473498e9","url":"./tags/云服务/index.html"},{"revision":"0d2ad2cd38797144806e20feeb8cfe53","url":"./tags/Linux/index.html"},{"revision":"5f279f4044308daa449b8fd908be1338","url":"./tags/manjaro/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();
