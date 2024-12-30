'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "49bdc8ee70c25a44a242081a7fa9d3e5",
"index.html": "f53c33fc02bc4ff6aa238acc73a4d2cd",
"/": "f53c33fc02bc4ff6aa238acc73a4d2cd",
"main.dart.js": "a8f78ef62ddcaead673a7ec507d53f98",
"404.html": "cc655ab8535ad1a1a6de090256172099",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "965df86339ec4c6aca6d16774e9b0028",
"icons/Icon-192.png": "a64794f3b4d5b2c2b300ecead4c0d80d",
"icons/Icon-maskable-192.png": "a64794f3b4d5b2c2b300ecead4c0d80d",
"icons/Icon-maskable-512.png": "cb55bb02f04f5b227923255ab5328b97",
"icons/Icon-512.png": "cb55bb02f04f5b227923255ab5328b97",
"manifest.json": "b89f2e509d0ccf655c44105f29d16eea",
"assets/AssetManifest.json": "4a972bcaa8cd7baec2560123b022e32f",
"assets/NOTICES": "662f446a40d154616a133a1901b82e6f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "012e9d0918771f2d6c5a6ce67612f9f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "544e21de8975e2b4e694fbeabe5f800e",
"assets/fonts/MaterialIcons-Regular.otf": "d3909eda4b8190b5e8caad4c4e4f6dd1",
"assets/blogsMarkdownFiles/how-to-render-markdown-in-flutter-apps.md": "011b605cf53eb1e24e31b0e2d820043a",
"assets/blogsMarkdownFiles/year-in-review-2024.md": "9fd1367ae9823de3b670027ec05ffb3e",
"assets/assets/images/navig_thumbnail.png": "187b28911a69a8f0f4ca1e9484b2242e",
"assets/assets/images/sujith_logo.png": "965df86339ec4c6aca6d16774e9b0028",
"assets/assets/images/relive.png": "5f23dad767c0c87fa501035369d1e954",
"assets/assets/images/mugs_side_bw_w1080.jpg": "7ac1959d3b134bbcef006780161606f7",
"assets/assets/images/virus_maar_thumbnail.webp": "ab2f2adf6f9216457239b569ee7db96a",
"assets/assets/images/latest_news_feed.png": "76bacc3346e92f2a4504d1db87fdf825",
"assets/assets/images/avatar_default.png": "6d7a8d509be59100ec749b9ea8ab81e7",
"assets/assets/images/joy_note_coffee_eyeglasses_overhead_bw_w1080.jpg": "f014b7b75e442ae187976761117acc17",
"assets/assets/images/postit.png": "44d28dfda402332089ba9b241744a5ef",
"assets/assets/images/shutter_stock_task.png": "823ff8d7fa3ed639e1c6fbdb0952fa5c",
"assets/assets/images/coffee_paperclips_pencil_angled_bw_w1080.jpg": "9f499cf53bb008afe9f6bd89deba9c52",
"assets/assets/images/just_listen.png": "3e2f20b31b80e09b0291b33a11e2d431",
"assets/assets/images/sharekaro.png": "1ff0225c7b8d032d2b17af278b4673d9",
"assets/assets/images/iphone_cactus_tea_overhead_bw_w1080.jpg": "319249e756f3a470d45841baea9d1132",
"assets/assets/images/jarvis.png": "a0cf007d40a27667cefb5ad8125abdaa",
"assets/assets/images/virus_maar_thumbnail.png": "dc8229191af79dad941d54c8be5d8a72",
"assets/assets/images/awesome_flutter_widgets.png": "ba40c54de8b91d81430525c01eeed10c",
"assets/assets/images/paper_flower_overhead_bw_w1080.jpg": "1bed4aefd73a600a585112a77c250a6c",
"assets/assets/images/profiler_app.png": "44895e1115925f3a9ca49e5ae15c2bdb",
"assets/assets/images/attendance_logger.png": "f3594f6a1c21b30db0b0d60d3abf3a49",
"assets/assets/images/typewriter_overhead_bw_w1080.jpg": "39e8f60e5bb2b90a5d801dd4617e7927",
"assets/assets/svgs/bs_logo_full.svg": "00023001d65ef8a4cda825fa149d212d",
"assets/assets/svgs/spot_light.svg": "d123bb311821580dc8a26618062ec6d8",
"assets/assets/svgs/bs_logo_home_page.svg": "a2403fdde28ceabda839ff00331aa3b3",
"assets/assets/svgs/navig_thumbnail.svg": "34959eb4b82538f79ed9cadd905659a0",
"assets/assets/svgs/bs_logo_home_page_cropped.png": "2136c89546b0c9d947d9933941712b7c",
"assets/assets/svgs/bs_header_logo.svg": "20f7a94048346eea70225383178777b6",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
