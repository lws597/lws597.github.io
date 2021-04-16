const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "lwscode"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"1bca560f619ad43f1417aa7b33491a0c","url":"./0/index.html"},{"revision":"28cc55a03b0bff53c5dfcdcb4087255e","url":"./1/index.html"},{"revision":"779fd8c1414413759b462652fe7daf3b","url":"./10/index.html"},{"revision":"5fa65125a839af02c972d034df3b93ae","url":"./11/index.html"},{"revision":"145972172b15ac8e0c1f87659a356f00","url":"./12/index.html"},{"revision":"a79fd665a94d797b86fb924eeddddfc7","url":"./13/index.html"},{"revision":"51b7799443ad10ebe53921dee3562b3b","url":"./14/index.html"},{"revision":"9fcc642bd6086b6728ec932888d1c51e","url":"./15/index.html"},{"revision":"ef6b344bcb7b62e4953a788df806fd48","url":"./16/index.html"},{"revision":"fd4340735f0f10703b3f16bdad909e95","url":"./17/index.html"},{"revision":"ce0a95d32b255bedc42e087a6db81fc7","url":"./18/index.html"},{"revision":"2bbb938450d457df301877af499ae06d","url":"./19/index.html"},{"revision":"7aca6bed293af630bd27e8071f45c1e4","url":"./2/index.html"},{"revision":"66b3b62b2e94fbe5289421a4b3fd5412","url":"./20/index.html"},{"revision":"ef4fa4e375864f259a9603df05eaaf2d","url":"./21/index.html"},{"revision":"45eb64b4411d10eb34f31e72b6586b78","url":"./22/index.html"},{"revision":"b8f9a587807bfb76ec9a774dac13b713","url":"./226/index.html"},{"revision":"3c6c58f24d468df2bdb765a0c271b38b","url":"./23/index.html"},{"revision":"24c18c48e7e6237959b8111927e7f2e6","url":"./24/index.html"},{"revision":"6c92b7ea07e75de8492ea22f444bdf12","url":"./25/index.html"},{"revision":"bd90fd116190456354ed1bed4b6e03ec","url":"./26/index.html"},{"revision":"fc10240c316ce700289dd6f48fe25c6b","url":"./3/index.html"},{"revision":"3e707dd7af11ff9ac0b37af11b68c9a0","url":"./32699/index.html"},{"revision":"dd2204054a799b3404a7933505cf3ef4","url":"./4/index.html"},{"revision":"09280c1081905523d77a7e4733ac6b72","url":"./404.html"},{"revision":"f044caa69924b5518c7d24916bc4d6ec","url":"./5/index.html"},{"revision":"e63fb6037e5b47cb0956b0aae7e36afa","url":"./6/index.html"},{"revision":"0b1eb5ac30057998bf1417322696e4e5","url":"./7/index.html"},{"revision":"9240c5417be168985a1c18c354ccc978","url":"./8/index.html"},{"revision":"b0519ebdcb14d7a61814da07d2aba302","url":"./9/index.html"},{"revision":"a7386b3dc8dded1267622af11fdcf135","url":"./archives/2020/10/index.html"},{"revision":"a2573cf3b00de36ce4b40882199929f0","url":"./archives/2020/index.html"},{"revision":"9b48322ed394657e364f145b8cccbea3","url":"./archives/2021/04/index.html"},{"revision":"8a5baf5cc4684adefbaeca707b080992","url":"./archives/2021/04/page/2/index.html"},{"revision":"3c064c885a970d1f89755acf0e52531e","url":"./archives/2021/04/page/3/index.html"},{"revision":"701871e184ef6d78f7269317ee73012b","url":"./archives/2021/index.html"},{"revision":"d42adf37594aeb844a37d3c6dc5c966f","url":"./archives/2021/page/2/index.html"},{"revision":"c1305d058427de8dde62afbed1c4625e","url":"./archives/2021/page/3/index.html"},{"revision":"6db651e2c7b1d2fb1d03753d2dd1a022","url":"./archives/index.html"},{"revision":"cf11784ff0491dbf0dc63892c90584d6","url":"./archives/page/2/index.html"},{"revision":"1fa9405553fb0b895281b461e85d1791","url":"./archives/page/3/index.html"},{"revision":"c986f05fe980231ae19b6185c6ccc696","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"4b1a9efede6f6cbf94af262d6ac89ea5","url":"./books/index.html"},{"revision":"0a9eb59108da5a40b7db1939012260a7","url":"./categories/云服务/index.html"},{"revision":"2d19bbd6d904f9767a9827bb24ce1137","url":"./categories/Linux/index.html"},{"revision":"39c2daf34bf0ce6d4d3f38773467d50a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d8e2d00e5bebf9b7cd755917dff9abad","url":"./games/index.html"},{"revision":"25220154a4c7bd899331059d3eb1ade0","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"f8ee1781e1ad992c56ad4b953ef0c34f","url":"./link/index.html"},{"revision":"b9b2b455a3c4a36b4527e5d913a5fcdf","url":"./manifest.json"},{"revision":"8af1918a23b4949847ac192a0f155ea5","url":"./movies/index.html"},{"revision":"be29b8d6de997d76645d3f778e62da04","url":"./page/2/index.html"},{"revision":"2af01c9e5bc49122112491ba2ddf04fc","url":"./page/3/index.html"},{"revision":"aa9eeb0dc3d1b745035cc03939613847","url":"./self/dracula.css"},{"revision":"81e2160a9c8138a363d97ee222d183b5","url":"./self/kimbie.css"},{"revision":"e01ef3ab14cd7c05cd0f9ba3fa059b5a","url":"./tags/云服务/index.html"},{"revision":"4bb007f8d133d70ce7692a2a51db0153","url":"./tags/Linux/index.html"},{"revision":"8e87fac16449e7b590dac7ac3e36012a","url":"./tags/manjaro/index.html"}],{
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
