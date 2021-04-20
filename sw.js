"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"lwscode"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f9a5020050f04d2eda27a94db1a519e7",url:"./404.html"},{revision:"274c0c649c62ef484b22af3be8ca050e",url:"./archives/2021/04/index.html"},{revision:"666ad31325e4b7a0e23e504fa41920c0",url:"./archives/2021/04/page/2/index.html"},{revision:"233e417c42cfae689bfdde0299783922",url:"./archives/2021/04/page/3/index.html"},{revision:"5a54089fe833544933d0b62801de414c",url:"./archives/2021/index.html"},{revision:"c2a8be7f391a7f116eb914a43fd72d1a",url:"./archives/2021/page/2/index.html"},{revision:"2cfd7c1bc9226379e373f6b500b7e83b",url:"./archives/2021/page/3/index.html"},{revision:"52061c0e0108ddc3ccc623f282fff1b0",url:"./archives/index.html"},{revision:"aa123813252b2af15e5df463f867e7d5",url:"./archives/page/2/index.html"},{revision:"0a5cae79c880f9446203ebbb375f4f98",url:"./archives/page/3/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"0621879a0a4b8fa941b49edc8f389f90",url:"./books/index.html"},{revision:"6171b81544e0658ee3bdd8f456404b12",url:"./categories/index.html"},{revision:"580ce183790a96bdfdc38856dc3b9024",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"de386f4849454707a35a5c6cd4a21ade",url:"./games/index.html"},{revision:"c97aa6e65d86df13f1eacffc6b0c5d4f",url:"./index.html"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"afe7b57f3834eec96c6508e73cf71248",url:"./link/index.html"},{revision:"7921e95352ddb6a9a4afa04a2384ac17",url:"./movies/index.html"},{revision:"3c8e1410eabfb3619e6c7eee61a0e263",url:"./page/2/index.html"},{revision:"233c714c6b1b48f792d727a654f009df",url:"./page/3/index.html"},{revision:"f9fdf89249ccf75c2f9472a6b8d330c0",url:"./posts/12527/index.html"},{revision:"850e3bc0832e099daaa3ee21efbbfef3",url:"./posts/17758/index.html"},{revision:"ee589dbb037b93b64cac9c57e0dcf35b",url:"./posts/22684/index.html"},{revision:"ada26b8fa306948d4e00d8d08011aa0d",url:"./posts/23809/index.html"},{revision:"e2b518d38c83249e175e71b1c55fd9ee",url:"./posts/24701/index.html"},{revision:"9b4f86bef51d31627ef48da28bfeb332",url:"./posts/34015/index.html"},{revision:"6178aa86370b0cb7bdcdc7d1bdba0565",url:"./posts/34204/index.html"},{revision:"8ab760d869b69ec02e56ababbb5510f6",url:"./posts/34207/index.html"},{revision:"ba6ca5993f3c32bf58818c6084a8f212",url:"./posts/34591/index.html"},{revision:"1376c086545de4d3e6a4c1d97cd5ca13",url:"./posts/39017/index.html"},{revision:"2c113a334b51128ec196ea9ba62f6884",url:"./posts/40241/index.html"},{revision:"820a5ae377a07366a5817d4fb6c97a86",url:"./posts/40772/index.html"},{revision:"fadf60ec6d86e5d403457fc7fd135362",url:"./posts/41148/index.html"},{revision:"7d49ca22971b510bb4687efd205f3fc5",url:"./posts/41468/index.html"},{revision:"45de263131ecf5dd949c7d5650df4987",url:"./posts/41532/index.html"},{revision:"170f5b70eeb8353e668fc89d19be83e6",url:"./posts/47032/index.html"},{revision:"e2a9080527988e34551561c1ca24af19",url:"./posts/51743/index.html"},{revision:"5aac4943fb108872f0eace643bec3a3e",url:"./posts/52590/index.html"},{revision:"f69f4f7f60a87d4b4ca881767742c146",url:"./posts/5304/index.html"},{revision:"e875a1ca231ee8ae5503a3a924fc1edb",url:"./posts/53859/index.html"},{revision:"0332a058d746c9bc8861be9f831ab0d5",url:"./posts/56828/index.html"},{revision:"cee545b5bc24ab3b2e9647b03e107f1d",url:"./posts/60718/index.html"},{revision:"530194788962d968aac21662cbcebdf8",url:"./posts/8419/index.html"},{revision:"455163639a1da66172f58487043d663f",url:"./posts/8601/index.html"},{revision:"271b5427cfafa18e40bf438bdb6e1652",url:"./posts/9423/index.html"},{revision:"8d8cd02c8f1963993488d5562a089800",url:"./posts/9628/index.html"},{revision:"89c6ef05ea9f1d4714b75ad2126f1e40",url:"./pwa/manifest.json"},{revision:"0fc89cb6fa24689a0534c833e5e3f2fe",url:"./self/dracula.css"},{revision:"21e25663454958f0d11c38a6f1b51b81",url:"./shuoshuo/index.html"},{revision:"3ed4a4a3b4a85ac0cb5974c9daafc74f",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();