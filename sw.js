"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"lwscode"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"dfde1edb7a1611398bc24d0fb0200679",url:"./404.html"},{revision:"ef52710999424d990fef5d4868653d46",url:"./archives/2021/04/index.html"},{revision:"4fa6d7245b6952a4d2cc319100a4a27a",url:"./archives/2021/04/page/2/index.html"},{revision:"92b274b2ae5ce84b26eae6fa59b8880d",url:"./archives/2021/04/page/3/index.html"},{revision:"6da783d63fed6fb9e44cd07e2f5c5a2f",url:"./archives/2021/index.html"},{revision:"b5e608998d07871d9261c088d66cbe6f",url:"./archives/2021/page/2/index.html"},{revision:"201fc70ca19aa34af2a4acae131de151",url:"./archives/2021/page/3/index.html"},{revision:"cc1f3d95624814d67e8bfb5c5019ff16",url:"./archives/index.html"},{revision:"2f3c49ad5c608df192d4a78a213cf708",url:"./archives/page/2/index.html"},{revision:"fbaece71d5328ebda922b3600f6123c1",url:"./archives/page/3/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"b6d081a243517099dd06ddfe72de2f42",url:"./books/index.html"},{revision:"fb798a8cdcf395ee8935913b6b9f20d5",url:"./categories/index.html"},{revision:"580ce183790a96bdfdc38856dc3b9024",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"b9f97ba84382a143ba3b092c79a0c7d1",url:"./games/index.html"},{revision:"7682118b9e5902fb812194eee1958e6d",url:"./index.html"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"518c944ee677de202153688fe99700ef",url:"./link/index.html"},{revision:"7d29211438313d6638753d5bed328a96",url:"./movies/index.html"},{revision:"d4ca93abdf59ab99659f7e0ab687b638",url:"./page/2/index.html"},{revision:"7ae48549f2a9e3254ca0b6ab13265c06",url:"./page/3/index.html"},{revision:"eb25b6cafd6115749625746ccdcea303",url:"./posts/12527/index.html"},{revision:"97c98971c541e33cb4033965c824ddda",url:"./posts/17758/index.html"},{revision:"b39fb70f19ef20a3f4a81ace7c4d2e3e",url:"./posts/22684/index.html"},{revision:"d3afaa14d47756b5b5dafcef7975ed8e",url:"./posts/23809/index.html"},{revision:"f65fd56fc3c68208ee55b4278f0e68e2",url:"./posts/24701/index.html"},{revision:"0d88bce364df6beac4528dcd72884937",url:"./posts/34015/index.html"},{revision:"e449cda45868222ce175873aa55c49f0",url:"./posts/34204/index.html"},{revision:"768026573c413fbad67ee74e933ea560",url:"./posts/34207/index.html"},{revision:"17ef125ebafc1c8ddc9430d354e4cb2c",url:"./posts/34591/index.html"},{revision:"4d4464b7622611f7a3c2010886dd152d",url:"./posts/39017/index.html"},{revision:"15009084da2b9c0d502569126bfde58e",url:"./posts/40241/index.html"},{revision:"6bc62b81e03bb5ddc065d9c86ee44574",url:"./posts/40772/index.html"},{revision:"aee403cf1b914ffba7745cb7b3382a6b",url:"./posts/41148/index.html"},{revision:"0dd54f63b4ebdfbdf2614b964398e197",url:"./posts/41468/index.html"},{revision:"6bfe2259609cce76a562ba631ed1eddf",url:"./posts/41532/index.html"},{revision:"ed7b455ab84c71ac9cc9645653d49868",url:"./posts/47032/index.html"},{revision:"664aa34abf1eeeaf52fa2c282b7b42bc",url:"./posts/51743/index.html"},{revision:"0ad279e48dc39cd1dc0772ea9d8e54c3",url:"./posts/52590/index.html"},{revision:"ad4d291ce06d620872d7a14135458d61",url:"./posts/5304/index.html"},{revision:"78c11d750d8d7bf9a2ece45a3113f640",url:"./posts/53859/index.html"},{revision:"ee342854e5b8dbd437b37a5d3a989162",url:"./posts/56828/index.html"},{revision:"f3f75470e9312613a16c1f8c91cbdd03",url:"./posts/60718/index.html"},{revision:"ec67cdce00e8641ed77c2c5a7eb0276a",url:"./posts/8419/index.html"},{revision:"eb1bc812a250e2db6ccf7b3601673dfd",url:"./posts/8601/index.html"},{revision:"fabef8df8e2b692334fff2b49ce615ae",url:"./posts/9423/index.html"},{revision:"a5a418a0edd888b7969deaffd559e49c",url:"./posts/9628/index.html"},{revision:"89c6ef05ea9f1d4714b75ad2126f1e40",url:"./pwa/manifest.json"},{revision:"0fc89cb6fa24689a0534c833e5e3f2fe",url:"./self/dracula.css"},{revision:"e646633ba3afce269e294495f4bb29cb",url:"./shuoshuo/index.html"},{revision:"cc905fadcd9e6e20c27bbdeda092ebe2",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();