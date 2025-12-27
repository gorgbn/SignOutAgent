'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3cc772857d3f46ee5f296b75186acc8b",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"index.html": "c26d9ded0a75a3438efc19fdcb96f4c3",
"/": "c26d9ded0a75a3438efc19fdcb96f4c3",
"main.dart.js": "ac4a71bcd5d15ce53d39a81e1e9ca262",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9a0de1ff26661cd281cb9deb3db33b02",
".git/config": "986202f124ef7d0c526f42bbf27b9e1b",
".git/objects/61/45c01df9f251b3ba256c6e343a232235814da8": "5a98dba70771e625efa30ccfea92fb0b",
".git/objects/59/afe1340caa685016cf2aff839a30c4efca92bc": "22deb1ab24e5d9a3e16136b3c545c25f",
".git/objects/92/e21a995527cb9d0267ad915d979b023fd1a96d": "594b9430e69a64d5f8157f59a9bbf5eb",
".git/objects/3b/bee5fcda9b89750006875d7d074973ec13c23f": "fa274867ab7eb7bfcc44fcaa5fd58918",
".git/objects/3b/16f6d2d4e039ed75026d7529aaf3fe50525178": "1cd27b064f174e9e3367f32d060156c0",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/5c621b1927270df73f1fcea17fadbdf8637c0c": "05f7443f71cebfa5d7b2b077e198f785",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/4fa59579e8b065fe8af5afa60a87ce377f475d": "38ba56484d692c3be207751b331ed6ec",
".git/objects/be/b8b08bbc499244186e446265065eb2430ea00f": "ff0d2eb7fbc87f524e205131697f49d7",
".git/objects/be/aa0ecf98993703da4e5a22d515c0d985e3bf34": "69da57a0cc91b8dcacf1677055db6199",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/40d61baeef8746cfc89ab73fe3be1ef11a5361": "6bee3720ac3b52eada5861fa39131375",
".git/objects/d8/f9d85d902297c691425cd9afadc7267f7c1945": "686f726a7e9205ed474bf2c180bff683",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e0ae240b32557a1f922d11704d8cb1b8d794fd": "842ce1ced7e591c2e7e8c86b4a5df07f",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/c9/a8b983d56e724debd875d1542ab9e678958b1f": "9af5b13ac81734a6ef098194419906a9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c6db90a50b667b555fcddf44c3a24603247c88": "ed07163cf0a3b649f32766cb8002c86b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/4cc52810e426ba6276681cc18f908cb5b5d936": "5608b7e8929d7182c66ce7edddc01613",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/18/c8e73ddbbab8753bc11e02821b166d88c70ffb": "79146787b883033167273e18ba5e9330",
".git/objects/29/cb932d274be987ee0006c73224d141590a4d65": "7d62b0c1b691c475ebdd05f6bc2acd3b",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/7b/78eb0656762207c212bee608b538d117f073e6": "42eedbd9ea52e9f02d6ce10dfdbbec3f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/09/bfb79d5cb5eb165b9eb6ca23d68c4642acc713": "9b5e6b8f4be5315303d1ac3b3070f2ee",
".git/objects/96/7100ba43f23def61684e9f259d7d6c10c11db7": "52ea030fe900dddaf9d2e80fe0f462af",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/5c6c14421a14022fb33ba3fb8c251a7cb5f1ec": "9921cd3de358e172be42a6b558548508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/30925e0b6bb6d7a4bfbf1798282db9ab5050a0": "3667f151ed96346c2e276d42a18ca6fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/f0/7876ddfe74234b9c9207051e59512aeec77008": "ce234d2df463eaea209b259d558766bf",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/12dc04a95971cd1a556ac7fff90a7eee07a4a6": "721d7ed29a1a87d6907d55f6be093aff",
".git/objects/f8/92580ace88d2be27a62334d8d7933057284399": "eae67f867c1ac45397cd6bf5382ea570",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/84/824c85c29fff5d0d170a5e62e9feed097693d0": "d5510aebb6dba3d47d3b11fc8580ca9d",
".git/objects/4f/3aa33e901ea12e4cc34d81764f241aabeca4c8": "34b3a6db4ffafb0c13033576516423b8",
".git/objects/47/2bdc019932d8f26216062aaebb6dd64969f2a3": "e68ad65fe035ad756b5fa6ad462de7e6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ac64f86f14c81068f888f7063d08880",
".git/logs/refs/heads/main": "f1ca260c6cde3084d2635d1e009c8145",
".git/logs/refs/remotes/origin/main": "2c4b9fc553b8ec5f98ded01e3942b6d4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7614c644d3ee788b8973779c62c5fdd0",
".git/refs/remotes/origin/main": "7614c644d3ee788b8973779c62c5fdd0",
".git/index": "646163bd68cf749ff2618029bdd2115e",
".git/COMMIT_EDITMSG": "e3c3b6afe04ec0706c6002192765e405",
"assets/AssetManifest.json": "0faa06c15a56f8f876eb7a49479650f8",
"assets/NOTICES": "86fd935c62a066c26ec8516b0e4df0e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f2a88e6a03db44f9c502e5dc14fac5f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4ae793e9cdc44e4b0dd028763de99558",
"assets/fonts/MaterialIcons-Regular.otf": "1caa319c5d2f53464906b23598ab5d63",
"assets/assets/images/August%25202025%2520ER%2520Call.pdf": "a5873e313294567e8ec61595d0a086fb",
"assets/assets/images/github.png": "bde0330a9307041009d8c204fc2c99f5",
"assets/assets/images/img.png": "58bc73fb08617712b3558eb1e36ab148",
"assets/assets/images/111.jpg": "6c1574f64b73f26037b100f98661e616",
"assets/assets/images/08.2025%2520August%2520IM%2520team.docx": "58194efc6b27a102a339ef74352fc933",
"assets/assets/images/twitter.png": "a36e9470380fcfe6ec4d2b0057d11eaf",
"assets/assets/images/linkedin.png": "77dd3b644da0baa5bcf5f6c674bd6683",
"assets/assets/images/pub_dev.png": "0cd3e0ee353d4ce3cfb97ac046dd9821",
"assets/assets/images/1.jpg": "cadc254807b5a032674d0614d0ac1bdb",
"assets/assets/schedules/August%25202025%2520ER%2520Call.pdf": "a5873e313294567e8ec61595d0a086fb",
"assets/assets/schedules/08.2025%2520August%2520IM%2520team.docx": "58194efc6b27a102a339ef74352fc933",
"assets/assets/schedules/August%25202025%2520ER%2520OnCall.pdf": "a5873e313294567e8ec61595d0a086fb",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
