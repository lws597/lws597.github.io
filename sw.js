"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"lwscode"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b700f06b0c3ba2b9bfa40a909cb573e8",url:"./404.html"},{revision:"50ff7872712c3cb5fd61ceab3b1fe501",url:"./archives/2021/04/index.html"},{revision:"371f58f2c3a614277c44dd1b86d4c698",url:"./archives/2021/04/page/2/index.html"},{revision:"1b808a8f5e8f58cf3d80e5b625314d10",url:"./archives/2021/04/page/3/index.html"},{revision:"817330fd0a94a200bd97bb2ba32ef0d6",url:"./archives/2021/index.html"},{revision:"f704e83c557f05f810b33d5f250f9e54",url:"./archives/2021/page/2/index.html"},{revision:"3f0ec067665e88faff2da8d789eee1c4",url:"./archives/2021/page/3/index.html"},{revision:"86f2c4157a0a8ae0accbb5f5cbbe038b",url:"./archives/index.html"},{revision:"b68c1798036a8340c215c316bb8514b8",url:"./archives/page/2/index.html"},{revision:"f6cd58cb1c2614083909022102fc7165",url:"./archives/page/3/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"19a29fc91eb78cb5e37c3869e7150b70",url:"./books/index.html"},{revision:"2bbfbcecbc7d436c3a86722408c2138b",url:"./categories/index.html"},{revision:"580ce183790a96bdfdc38856dc3b9024",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"3f5e52c52843fb7277ff09d4f17fde81",url:"./games/index.html"},{revision:"c70a55c5164e76c324090ff294c98c2c",url:"./img/manifest.json"},{revision:"f63c793f5cda4bb60b02f7f9ad5e6190",url:"./index.html"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"7c13e4768d02f66c295a4583fb6a29cf",url:"./link/index.html"},{revision:"4314b3f87d70b85885deefc78444c64a",url:"./movies/index.html"},{revision:"579a197846da5652d8e977d3d3aca2cd",url:"./p/12527/index.html"},{revision:"b47b80cbbc72dc60317f1f9a71262bd1",url:"./p/1579/index.html"},{revision:"1bc88953b82268c9fa927f46fd3fb9e3",url:"./p/17758/index.html"},{revision:"58f68a9ab36a5dc70ec4ec9205820e04",url:"./p/22684/index.html"},{revision:"e16755bd4326c5918ec96506fbdc07f8",url:"./p/23809/index.html"},{revision:"95ac29509a3eb8134a5e327e77c5ebd3",url:"./p/24701/index.html"},{revision:"4afc7a8af9fcf0ff59e713369d718b41",url:"./p/34015/index.html"},{revision:"6c7f68ee4e3abfe44a72741c3ffd21a5",url:"./p/34204/index.html"},{revision:"0bd646c0a831c81668cf2df2fcb32b7e",url:"./p/34207/index.html"},{revision:"e055a6cd085cc55584cb9c9d598fe32b",url:"./p/34591/index.html"},{revision:"b4e79496dae0376a6b0dc96fcdbef9e1",url:"./p/3770/index.html"},{revision:"5bc6e40822545b050901c6d0f617e057",url:"./p/39017/index.html"},{revision:"f88e027b9a3237c627ca778153a329d9",url:"./p/40241/index.html"},{revision:"703245e8d7fc94de96e35e0fd56f9720",url:"./p/40772/index.html"},{revision:"0b1044a6691546ea9ad1380a834122a1",url:"./p/41148/index.html"},{revision:"e56de0033666ce74b1cc533380488fb6",url:"./p/41468/index.html"},{revision:"d8d5b08f524c3740d50fbc0a151eb450",url:"./p/41532/index.html"},{revision:"86b727be09b73e665c21e395a52402f4",url:"./p/47032/index.html"},{revision:"3c8148c16a6c5037ecf7deb9b14e6be6",url:"./p/51743/index.html"},{revision:"6b692bf6765f98b6d4c05dc05c223a1a",url:"./p/52590/index.html"},{revision:"d9ec02ae44d788cd7fafee5e5f37cb0d",url:"./p/5304/index.html"},{revision:"67b4e0aade24aab558a87555c36374e8",url:"./p/53859/index.html"},{revision:"f5d3c8113ccfd7c14bd15023673001ae",url:"./p/56828/index.html"},{revision:"74f9796f07f20cc936942d524954933a",url:"./p/60718/index.html"},{revision:"409df34c8d6cf5db871358d7505b4083",url:"./p/8419/index.html"},{revision:"fe0f436ad30b112a3a43edabb11977f5",url:"./p/8601/index.html"},{revision:"a8da462951128210ade371e418c71637",url:"./p/9423/index.html"},{revision:"b4a98959f239028b533ee57654c9b400",url:"./p/9628/index.html"},{revision:"906f68199528774e9416857ed78d7cd2",url:"./page/2/index.html"},{revision:"bd813e9b2e86f9c03e87b05116f93702",url:"./page/3/index.html"},{revision:"0fc89cb6fa24689a0534c833e5e3f2fe",url:"./self/dracula.css"},{revision:"c56a97970f144b821924a042ebf52b71",url:"./shuoshuo/index.html"},{revision:"fa45f98882dfa1a4a0776ef957d2f222",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();