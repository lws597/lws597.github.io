const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "lwscode"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"54b970ac1e7450c6ac2d6d255842191d","url":"./0/index.html"},{"revision":"5c676925954c152cf43d3dc13a81ff9a","url":"./1/index.html"},{"revision":"a2244a6e4cc8a42989a03e386b71fa68","url":"./10/index.html"},{"revision":"52bbde9b9068abbae94c710babd0b6af","url":"./11/index.html"},{"revision":"693a9dd84e7d450e43b4ad63c8caca60","url":"./12/index.html"},{"revision":"4d3a5edf4f860b88eda9016b249d5dc3","url":"./13/index.html"},{"revision":"3648528ba9658b3f3cb56f2e4556175b","url":"./14/index.html"},{"revision":"5859c4db804eec80e4f0752e34047500","url":"./15/index.html"},{"revision":"d9d4793453a77ea2b2d78597b36c6a5c","url":"./16/index.html"},{"revision":"8624df477750fa8ce85c20e011bd5851","url":"./17/index.html"},{"revision":"f44bea179b3ee43b017a7013b36d4f15","url":"./18/index.html"},{"revision":"34b86a4a5eb3d12425d8cc64564f4f55","url":"./19/index.html"},{"revision":"c6ac6ecd977406141aceb4e940247c17","url":"./2/index.html"},{"revision":"f300a10def2b6f30ce81da6bad75bf35","url":"./20/index.html"},{"revision":"192dd8be83df295ea58f71af9158aa77","url":"./21/index.html"},{"revision":"989c766fcd3f5dac5f06497a1d445a53","url":"./22/index.html"},{"revision":"534a861b9f22795c33f50369389bfbb5","url":"./226/index.html"},{"revision":"095bd09a0b4faa872a2019705360fc2d","url":"./23/index.html"},{"revision":"aaac603b4193bf6c8f76ccede652ba16","url":"./24/index.html"},{"revision":"ccf8247bc494a944b9b743b50178bc9e","url":"./25/index.html"},{"revision":"3d29ee3c9c1339b8417c121c311e5c9d","url":"./26/index.html"},{"revision":"bf6a8d5a2183fe63bc970e6f50f2aed0","url":"./3/index.html"},{"revision":"cd988d238851d3547bd5103c3084d58a","url":"./32699/index.html"},{"revision":"6288e7d7147d801a1975f5b7a98bb234","url":"./4/index.html"},{"revision":"c4be872517eaa495aacf1b6a610e4d4b","url":"./404.html"},{"revision":"2febcac87b1eb5ff45c6e9f9f083d4a3","url":"./5/index.html"},{"revision":"738efedd021f351be5304cde98f65dea","url":"./6/index.html"},{"revision":"20c991d5e73375a502d5e932933c812b","url":"./7/index.html"},{"revision":"5a76029d1d2a5776d24de938af8ebb98","url":"./8/index.html"},{"revision":"103b7c4463ada76a5fc358fb60bc68e2","url":"./9/index.html"},{"revision":"2072b83d268a61519615fe212ff61ad0","url":"./archives/2020/10/index.html"},{"revision":"84703bb64ae5e70592982cf8e2e028ac","url":"./archives/2020/index.html"},{"revision":"80bc412a900f32952d7f14678f65343e","url":"./archives/2021/04/index.html"},{"revision":"8f83396ab3a92af2bde12ac935b6ca26","url":"./archives/2021/04/page/2/index.html"},{"revision":"adc633ed6b60cd6e744b7ee0dffdc98e","url":"./archives/2021/04/page/3/index.html"},{"revision":"0acbf5b69476bd2451995912b4951019","url":"./archives/2021/index.html"},{"revision":"08c24ac2a91a2b5c853e5c0b395d7b66","url":"./archives/2021/page/2/index.html"},{"revision":"bcc79557bdaec3fa297acf6f004e84bd","url":"./archives/2021/page/3/index.html"},{"revision":"7750c952b60eee6b3308831671851102","url":"./archives/index.html"},{"revision":"5975be7f16ae83bffedae98e540efded","url":"./archives/page/2/index.html"},{"revision":"8a1e42877ad151615e8626b237afe71b","url":"./archives/page/3/index.html"},{"revision":"94c320f7344956618b860f9ba51e0b50","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"c5273b8da7dbc77a0185a7ff8f13bffb","url":"./books/index.html"},{"revision":"26f3e185678434f8bad1e77bcd10ca67","url":"./categories/云服务/index.html"},{"revision":"6163d2ad7243c5f0d68a89f715533f6d","url":"./categories/Linux/index.html"},{"revision":"39c2daf34bf0ce6d4d3f38773467d50a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8bb7cc5707326e863801adccb44dbbe8","url":"./games/index.html"},{"revision":"304a28731b45b395ca50d5a1b7383aa2","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"0be412992e499e30bf470b1c21903c94","url":"./link/index.html"},{"revision":"b9b2b455a3c4a36b4527e5d913a5fcdf","url":"./manifest.json"},{"revision":"113c1ca84f3d65aaef8d0000f38ca0f2","url":"./movies/index.html"},{"revision":"aae8fce250d4cfc51e54e833060df61b","url":"./page/2/index.html"},{"revision":"9b96c3a3477a8d2de9f9f44cc118558c","url":"./page/3/index.html"},{"revision":"aa9eeb0dc3d1b745035cc03939613847","url":"./self/dracula.css"},{"revision":"81e2160a9c8138a363d97ee222d183b5","url":"./self/kimbie.css"},{"revision":"cc601d398933d35872ef31f5713d3c20","url":"./tags/云服务/index.html"},{"revision":"be4593f7058b9d98a70f5c48a55a240f","url":"./tags/Linux/index.html"},{"revision":"e98c0d8110c0a0b0cbbb4b8d265edfa4","url":"./tags/manjaro/index.html"}],{
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
