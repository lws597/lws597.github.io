const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "lwscode"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"38db4ee808e35fc25d854264666559c1","url":"./0/index.html"},{"revision":"b0ea83484135737b1fe540cbc95af8b2","url":"./1/index.html"},{"revision":"685d048b721b94c49b014c117ff47cb0","url":"./10/index.html"},{"revision":"ce505142cad12a1e5c6df54e8538b0ce","url":"./11/index.html"},{"revision":"666183b6e7f7951774c2993962a11edf","url":"./12/index.html"},{"revision":"3d0b4186b8274cb776fc243d835f2289","url":"./13/index.html"},{"revision":"e18237af26e34010e99826bf5017c32f","url":"./14/index.html"},{"revision":"d487129ad8906567a2b1fb3a9d7d85b0","url":"./15/index.html"},{"revision":"4ab70db4034f477f68f35d8988c4828f","url":"./16/index.html"},{"revision":"d52f716bc7dea57b3d91d2779aa81081","url":"./17/index.html"},{"revision":"b11db96bf99bf09c4bffe47c3e685a09","url":"./18/index.html"},{"revision":"872064d9608b12f18c08951d50963d05","url":"./19/index.html"},{"revision":"edb7331e0b0f7bf2230e5e83194961f6","url":"./2/index.html"},{"revision":"eb36476ecc8ad1a70efd92376b703bf6","url":"./20/index.html"},{"revision":"c7e5c0c7fddaa3ef6669e13a7944f235","url":"./21/index.html"},{"revision":"d6ae0bafd04b0804c832c2f577aa54dc","url":"./22/index.html"},{"revision":"b568c5cd86ddd8f3bd5df02de1215e99","url":"./226/index.html"},{"revision":"9e034f836c20cbf25e5b340b4c0f267d","url":"./23/index.html"},{"revision":"7244ec70c1efa6de240ec32e55596c80","url":"./24/index.html"},{"revision":"25fd07e78a7b4d4b0a686fa529b3a319","url":"./25/index.html"},{"revision":"c766d1d1fc956e45263e095d780699cc","url":"./26/index.html"},{"revision":"f70146f41674375fd3508628943a2ec5","url":"./3/index.html"},{"revision":"c381779af2a9dbf375c313f1f405aef9","url":"./32699/index.html"},{"revision":"d36bb8f24c1f5b0fcaa9bc2d9c00f798","url":"./4/index.html"},{"revision":"e08bab970b69325e61e9c0c1018af7fb","url":"./404.html"},{"revision":"beec70035ef9e949cfbc6554496dc22f","url":"./5/index.html"},{"revision":"1b339afa5821b3e61aefef033c414165","url":"./6/index.html"},{"revision":"cac32dbd73318f438522ae4ed0d3b042","url":"./7/index.html"},{"revision":"152f078417bd033953e72c5463ad71cd","url":"./8/index.html"},{"revision":"a2e351eaadda609fe5aeb56acb930c13","url":"./9/index.html"},{"revision":"66522f83b3d67f016c9f68b28fe0b115","url":"./archives/2020/10/index.html"},{"revision":"e0ea87a9743b9cf3cb91bb793944028f","url":"./archives/2020/index.html"},{"revision":"839d5e39a253ee9fc8c5a6a7e9287e2e","url":"./archives/2021/04/index.html"},{"revision":"96e26fbe415ff1692fca13ec44022702","url":"./archives/2021/04/page/2/index.html"},{"revision":"489e2d69406f2ad45410b5e849d5ff2b","url":"./archives/2021/04/page/3/index.html"},{"revision":"9f42000e4f383b626b3739cbf7d27f1a","url":"./archives/2021/index.html"},{"revision":"5cf6f46631922b39a3749de64000bf8e","url":"./archives/2021/page/2/index.html"},{"revision":"25dc6e5560193161372a7f7c83bec0f6","url":"./archives/2021/page/3/index.html"},{"revision":"b993f22526961d25183218a67be0d40b","url":"./archives/index.html"},{"revision":"b8806fd5d7856806a3f574c5fae837ad","url":"./archives/page/2/index.html"},{"revision":"26db34296e6a3555d0b4086bee3e6a83","url":"./archives/page/3/index.html"},{"revision":"6f268f2a59e5fe68670c193eda12520e","url":"./artitalk/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"6fcbf2171617f2bbbb25877d8089e042","url":"./books/index.html"},{"revision":"9447e504ab73b2273a8952f100e92218","url":"./categories/云服务/index.html"},{"revision":"f3c3c78ebc3d3682e9c9710c65d04eb6","url":"./categories/Linux/index.html"},{"revision":"39c2daf34bf0ce6d4d3f38773467d50a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a7ec5f38f73ccb155daa3558243c6c6a","url":"./games/index.html"},{"revision":"20304eda98b6f39ade060c7993080fff","url":"./index.html"},{"revision":"5641b1a6b817df7d81f465c27ed538d9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"d2391123befd09daba0b195f227ff600","url":"./link/index.html"},{"revision":"b9b2b455a3c4a36b4527e5d913a5fcdf","url":"./manifest.json"},{"revision":"10953e1b60392585317f427b689e85ba","url":"./movies/index.html"},{"revision":"7f703e3bbcf7e66eb9a8b3717c40e4cb","url":"./page/2/index.html"},{"revision":"f0b923873b53bc91c887e9e201f75ef1","url":"./page/3/index.html"},{"revision":"aa9eeb0dc3d1b745035cc03939613847","url":"./self/dracula.css"},{"revision":"81e2160a9c8138a363d97ee222d183b5","url":"./self/kimbie.css"},{"revision":"1ee5bb75af967203328bed5fb66b9870","url":"./tags/云服务/index.html"},{"revision":"c3add900b42ded5164d36b0e72c93eb2","url":"./tags/Linux/index.html"},{"revision":"cbef81efd6b0b113fd58cd3ab7afcd06","url":"./tags/manjaro/index.html"}],{
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
