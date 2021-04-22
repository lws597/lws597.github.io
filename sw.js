"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"lwscode"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c467dace85f32d3f4624d7bfac799266",url:"./404.html"},{revision:"5d1990b7b7d8b0119debd941abe99bfd",url:"./archives/2021/04/index.html"},{revision:"a8be8a1a1799c077cf02a910f39bece0",url:"./archives/2021/04/page/2/index.html"},{revision:"37f65ef411ef2de7351b15d79de79581",url:"./archives/2021/04/page/3/index.html"},{revision:"473e89ba3e9180913a81b3468a3239c6",url:"./archives/2021/index.html"},{revision:"19a5779f1859c8d565ab4358f48542c5",url:"./archives/2021/page/2/index.html"},{revision:"17ceb580d58b1cd13bcc01781e378b36",url:"./archives/2021/page/3/index.html"},{revision:"ab3a9e3d2319018ba717c32884b75349",url:"./archives/index.html"},{revision:"ad3b27698f100731b4d0f6434dd9ed60",url:"./archives/page/2/index.html"},{revision:"0db76fbcaa4775fddecff2e5557df435",url:"./archives/page/3/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"d59ef6140599561cc52f7e8e5c273842",url:"./books/index.html"},{revision:"488af4322bd84f3b2410f20cd5d4c0b9",url:"./categories/index.html"},{revision:"580ce183790a96bdfdc38856dc3b9024",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"adf022e92f32671a149c656e186f49f0",url:"./games/index.html"},{revision:"c70a55c5164e76c324090ff294c98c2c",url:"./img/manifest.json"},{revision:"a98b9be13c3ceeb01f15eed6d3000b07",url:"./index.html"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"c2200d18fa972b116e0b8727ae92e0cf",url:"./link/index.html"},{revision:"4ffc6c63df180bfbd5a6f69993d4fffc",url:"./movies/index.html"},{revision:"4307998d22bdfbebec8bf1dd6bd48325",url:"./p/12527/index.html"},{revision:"0ff24e4027f79ec51fa1c271f477f5d1",url:"./p/17758/index.html"},{revision:"dbb01f0dc44926402aab25537e4cb12e",url:"./p/22684/index.html"},{revision:"042c91e30c1c13b5f5a0a11144855ee4",url:"./p/23809/index.html"},{revision:"26261e2a2262bdac0b41fd8b28ca9a8e",url:"./p/24701/index.html"},{revision:"355da618b2cebfddca55195c69e4575b",url:"./p/34015/index.html"},{revision:"5c91643763c9a5134dbc7161f5c5faa3",url:"./p/34204/index.html"},{revision:"1da5bf15a57349b85488cdb99a01673b",url:"./p/34207/index.html"},{revision:"82b8aba52534b266ebe022c9b566e70d",url:"./p/34591/index.html"},{revision:"9576583a0cd40b48c759bff07dba9048",url:"./p/3770/index.html"},{revision:"5212994475cb9f26e22eb5abce7c9302",url:"./p/39017/index.html"},{revision:"1eee42bd864c887076f500da82eb2fe0",url:"./p/40241/index.html"},{revision:"816e695652a03eadc551a5ed7e4fb257",url:"./p/40772/index.html"},{revision:"ea98c861924d68720021336073338781",url:"./p/41148/index.html"},{revision:"d9398cbf0f4fc55b429582618db68e20",url:"./p/41468/index.html"},{revision:"e56ce1145e3575e12ef331c7d90df5e5",url:"./p/41532/index.html"},{revision:"01c4ccb720f7383e36286a9aa818b6f6",url:"./p/47032/index.html"},{revision:"3238da31209fc40dc0a41aeb98b53e53",url:"./p/51743/index.html"},{revision:"6fdff44d1f13c3ef5f1c1929066e0549",url:"./p/52590/index.html"},{revision:"04b2d34cb6194cfa6338803de107b947",url:"./p/5304/index.html"},{revision:"f6772024b59d6b817756a8dfdd432339",url:"./p/53859/index.html"},{revision:"39cb2bdcf6c738c71036ea61af793e73",url:"./p/56828/index.html"},{revision:"ffc9c34cf6d5867e4d6a2cdc3033ee1d",url:"./p/60718/index.html"},{revision:"a8193d75c786b5bf1e50db0ca395d624",url:"./p/8419/index.html"},{revision:"a1e9a843a7ed6ebf3fd277a13d855ecc",url:"./p/8601/index.html"},{revision:"75853e8f278806dbf392a3db152ac477",url:"./p/9423/index.html"},{revision:"596613498ad40b5f5f6013d8708a57f2",url:"./p/9628/index.html"},{revision:"e1d437b1ae741603201edea54052df04",url:"./page/2/index.html"},{revision:"89c0c6400743829b7cc8963629fd1f0e",url:"./page/3/index.html"},{revision:"0fc89cb6fa24689a0534c833e5e3f2fe",url:"./self/dracula.css"},{revision:"68d9f3b971149daed2a8aba0a1da637a",url:"./shuoshuo/index.html"},{revision:"10016cc7071f39c4fed9deb71e21e084",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();