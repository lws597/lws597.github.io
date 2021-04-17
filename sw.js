const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "lwscode"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"169fdd49173e0dc40fc681eb14e269af","url":"./0/index.html"},{"revision":"c2c1ea432d53ea61428c30405c4e75e3","url":"./1/index.html"},{"revision":"355c1161aed2acccfe465b82c4eeb201","url":"./10/index.html"},{"revision":"a2cf3084e810e7a48bea4c9fcc19fcd7","url":"./11/index.html"},{"revision":"53d70bd68bb9cdca8c116fa2662860a5","url":"./12/index.html"},{"revision":"a1eb860a606b1e4bf284340fb6843861","url":"./13/index.html"},{"revision":"be2b4b0c5fda8bebdeb511b1c34a3861","url":"./14/index.html"},{"revision":"f1443b59cda8dfca077a7cf4f33938e9","url":"./15/index.html"},{"revision":"1b39e8837d02fd4dc5077bf325bd5a97","url":"./16/index.html"},{"revision":"de463c13e21b7e06609c552db746a572","url":"./17/index.html"},{"revision":"60ddee71fe3706c805cec59fbd89f3d6","url":"./18/index.html"},{"revision":"64b403508e1a9ee295824ed1395898b4","url":"./19/index.html"},{"revision":"03e1a30045641d70eef045f97d1f3337","url":"./2/index.html"},{"revision":"a2ff46f0fa784ccd8ad4e8b2ecc0d934","url":"./20/index.html"},{"revision":"0c9b5ea58ef183dcf6d109a76f68599b","url":"./21/index.html"},{"revision":"57b20a9b14686a1f5c1681645e5ffc85","url":"./22/index.html"},{"revision":"5050f9a850457aa1709c6cce9751829f","url":"./226/index.html"},{"revision":"bbed1660b2872a1a3ec383b510660fa0","url":"./23/index.html"},{"revision":"04c292f2162ea78d76891331dc2441e0","url":"./24/index.html"},{"revision":"f2a8522f381e707581f7910b89d2d159","url":"./25/index.html"},{"revision":"56f4c624c1d7afd2fe1fdb3120eda837","url":"./26/index.html"},{"revision":"158777e64b6ccd3c4d52842bfc6b0394","url":"./3/index.html"},{"revision":"391408ef04d423b75492f78e52d6c4d5","url":"./32699/index.html"},{"revision":"8a538fd3fcc101b4b42c3ad3041ab5ac","url":"./4/index.html"},{"revision":"7ead69baf3237210c9c27b7d52e0f989","url":"./404.html"},{"revision":"b2a7a1248784aa1818bb214cfc427886","url":"./5/index.html"},{"revision":"26f042f752cb83cd93764e8098aad10e","url":"./6/index.html"},{"revision":"34ed5dcca59808bf7b6323c112d5ab67","url":"./7/index.html"},{"revision":"5ea31e946db38de1a8b2e1249cda8beb","url":"./8/index.html"},{"revision":"1a66ec3d856edd0b334849a36c7d1a03","url":"./9/index.html"},{"revision":"8a18e7e67796bef1593b495126c2ae33","url":"./archives/2020/10/index.html"},{"revision":"8e3795df91bca9b0badde30f378e3223","url":"./archives/2020/index.html"},{"revision":"eb70406a7cc35e89d8679e03bd58b5ce","url":"./archives/2021/04/index.html"},{"revision":"315577de27f7e3be05d4fc5de3ad16e8","url":"./archives/2021/04/page/2/index.html"},{"revision":"39e88787d8710e4e16464c76ecbee7a8","url":"./archives/2021/04/page/3/index.html"},{"revision":"534cb004723716a42665d88a1103d72a","url":"./archives/2021/index.html"},{"revision":"aca6da808027523db292190c8b5f9873","url":"./archives/2021/page/2/index.html"},{"revision":"da3724d901a30dbbb0415f381737a111","url":"./archives/2021/page/3/index.html"},{"revision":"8f4face858a15205d55215e5a75384b0","url":"./archives/index.html"},{"revision":"f6ae64ebd5af5e69ef82e8c92904e03b","url":"./archives/page/2/index.html"},{"revision":"243fe967611339cfaf8b13a44739f2f8","url":"./archives/page/3/index.html"},{"revision":"85a72436a67d6c39a1ee4c6f70798fca","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"a134bd061cd9e4e0a241a6f508b41873","url":"./books/index.html"},{"revision":"cdd9e57aff71b9ca8cdb443db3d61c7d","url":"./categories/云服务/index.html"},{"revision":"0ac1219eda8e8ec34b50d9722ce38aad","url":"./categories/Linux/index.html"},{"revision":"39c2daf34bf0ce6d4d3f38773467d50a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"85817f2085e9c645d9fbd635c302b77d","url":"./games/index.html"},{"revision":"6ed0162c824f9c2562957b6c56ad251e","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"dbdce1d740d22d4db4e213a3d4c9dbe5","url":"./link/index.html"},{"revision":"b9b2b455a3c4a36b4527e5d913a5fcdf","url":"./manifest.json"},{"revision":"4a2a07519ac0eee1d8d1054379945769","url":"./movies/index.html"},{"revision":"946f16e85ddc7b0a03c57b25a59979f9","url":"./page/2/index.html"},{"revision":"a32e74cff064bbeaf542764466e1733b","url":"./page/3/index.html"},{"revision":"aa9eeb0dc3d1b745035cc03939613847","url":"./self/dracula.css"},{"revision":"81e2160a9c8138a363d97ee222d183b5","url":"./self/kimbie.css"},{"revision":"6796b46b21185f9eda47400c152e045e","url":"./tags/云服务/index.html"},{"revision":"b0bc36e4f1bdecceae97568630dd6ced","url":"./tags/Linux/index.html"},{"revision":"c617d52e4b3e3aba1a7d7c3c3c948bee","url":"./tags/manjaro/index.html"}],{
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
